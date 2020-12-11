/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, HTMLAttributes } from 'react'

const alignOptions = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
}

const distributeOptions = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'block' | 'inline'
  blockAlign?: keyof typeof alignOptions
  inlineAlign?: keyof typeof alignOptions
  // eslint-disable-next-line @typescript-eslint/ban-types
  distribute?: keyof typeof distributeOptions
  gap?: string
  stretch?: boolean
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ blockAlign, direction, inlineAlign, distribute, gap, stretch, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const distribution = distribute && distributeOptions[distribute]
    const isBlock = direction === 'block'
    const align = isBlock ? inlineAlign : blockAlign
    const justify = isBlock ? blockAlign : inlineAlign

    return (
      <div
        ref={ref}
        css={{
          alignSelf: 'stretch',
          alignItems: stretch ? 'stretch' : (align && alignOptions[align]) || 'flex-start',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: isBlock ? 'column' : 'row',
          justifyContent: distribution || (justify && alignOptions[justify]) || 'flex-start',
          position: 'relative',
          '& > *': {
            flexShrink: 0,
          },
          ...(!!gap && { gap }),
        }}
        {...props}
      />
    )
  }
)

export default Stack
