/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'div' | 'p'
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ element: Element = 'div', ...other }, ref) => (
    <Element
      ref={ref}
      css={{
        boxSizing: 'border-box',
        position: 'relative',
      }}
      {...other}
    />
  )
)

export default Text
