/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, HTMLAttributes } from 'react'

const validElementTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'div', 'p'] as const

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  element?: typeof validElementTypes[number]
}

export const Text = forwardRef<HTMLDivElement, TextProps>(({ element = 'div', ...other }, ref) => {
  const Element = validElementTypes.indexOf(element) > -1 ? element : 'div'

  return (
    <Element
      ref={ref}
      css={{
        boxSizing: 'border-box',
        position: 'relative',
      }}
      {...other}
    />
  )
})

export default Text
