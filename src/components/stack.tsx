/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, ReactNode, Children, HTMLAttributes } from 'react'
import { Flex } from './flex'

const parseCssSizeString = (inp: string) => {
  const n = parseFloat(inp)
  const p = inp.match(/(%|rem|em)/)
  return isNaN(n) || n === 0 ? '' : p && p.length > 0 ? `${n}${p[0]}` : `${n}px`
}

const alignOptions = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
}

const spaceOptions = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}

type LiteralUnion<T extends U, U = string> = T | (U & { _?: never })

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column'
  space?: LiteralUnion<Extract<keyof typeof spaceOptions, string>> | number
  alignMain?: Extract<keyof typeof alignOptions, string>
  alignCross?: Extract<keyof typeof alignOptions, string>
  stretch?: boolean
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction, space, alignMain, alignCross, stretch, children, ...other }, ref) => {
    const s =
      !!space &&
      typeof space !== 'number' &&
      spaceOptions[space as Extract<keyof typeof spaceOptions, string>]

    const customS =
      s || !space
        ? undefined
        : typeof space === 'number'
        ? isNaN(space)
          ? undefined
          : `${space}px`
        : parseCssSizeString(space)

    return (
      <Flex
        ref={ref}
        css={{
          flexDirection: direction === 'column' ? direction : 'row',
          justifyContent: s ? s : (alignMain && alignOptions[alignMain]) || 'flex-start',
          alignItems:
            (stretch && 'stretch') || (alignCross && alignOptions[alignCross]) || 'flex-start',
        }}
        {...other}
      >
        {customS
          ? Children.toArray(children).reduce((res: ReactNode[], c, i) => {
              if (i < 1) {
                return [c]
              } else {
                return [
                  ...res,
                  <div
                    key={`space-${i}`}
                    css={{
                      flex: `0 0 ${customS}`,
                      blockSize: customS,
                    }}
                  />,
                  c,
                ]
              }
            }, [])
          : children}
      </Flex>
    )
  }
)
