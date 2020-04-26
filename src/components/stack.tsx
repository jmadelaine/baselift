/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, ReactNode, Children, HTMLAttributes } from 'react'
import { Flex } from './flex'

const parseCssSizeString = (inp: string) => {
  const n = parseFloat(inp)
  const p = inp.match(/(%|rem|em)/)
  return isNaN(n) || n === 0 ? '' : p && p.length > 0 ? `${n}${p[0]}` : `${n}px`
}

const hAlignOptions = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const vAlignOptions = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
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
  hAlign?: Extract<keyof typeof hAlignOptions, string>
  vAlign?: Extract<keyof typeof vAlignOptions, string>
  stretch?: boolean
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction, space, hAlign, vAlign, stretch, children, ...other }, ref) => {
    const h = hAlign && hAlignOptions[hAlign]
    const v = vAlign && vAlignOptions[vAlign]
    const s =
      !!space &&
      typeof space !== 'number' &&
      spaceOptions[space as Extract<keyof typeof spaceOptions, string>]
    const flexDirection = direction === 'column' ? direction : 'row'

    const customS =
      s || !space ? undefined : typeof space === 'number' ? `${space}px` : parseCssSizeString(space)

    return (
      <Flex
        ref={ref}
        css={{
          flexDirection,
          justifyContent: s ? s : (flexDirection === 'column' ? v : h) || 'flex-start',
          alignItems:
            (stretch && 'stretch') || (flexDirection === 'column' ? h : v) || 'flex-start',
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
                      [flexDirection === 'column' ? 'height' : 'width']: customS,
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
