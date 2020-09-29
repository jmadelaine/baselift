/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, HTMLAttributes } from 'react'

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

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'block' | 'inline'
  blockAlign?: keyof typeof alignOptions
  space?: keyof typeof spaceOptions | (string & {})
  stretch?: boolean
  inlineAlign?: keyof typeof alignOptions
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ blockAlign, direction, inlineAlign, space, stretch, ...props }, ref) => {
    const wellknownSpacing = space && spaceOptions[space as keyof typeof spaceOptions]
    const isBlock = direction === 'block'
    const align = isBlock ? inlineAlign : blockAlign
    const justify = isBlock ? blockAlign : inlineAlign

    return (
      <div
        ref={ref}
        css={{
          alignItems: (stretch && 'stretch') || (align && alignOptions[align]) || 'flex-start',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: isBlock ? 'column' : 'row',
          ...(!wellknownSpacing && space && { gap: space }),
          justifyContent: wellknownSpacing || (justify && alignOptions[justify]) || 'flex-start',
          position: 'relative',
        }}
        {...props}
      />
    )
  }
)

export default Stack
