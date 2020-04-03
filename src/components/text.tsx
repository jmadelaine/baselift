/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, HTMLAttributes } from 'react'

export interface TextProps {
  element?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export const Text = forwardRef<HTMLDivElement, TextProps & HTMLAttributes<HTMLDivElement>>(
  ({ element, ...other }, ref) => {
    const Component = element || 'div'
    return (
      <Component
        ref={ref}
        css={{
          boxSizing: 'border-box',
          position: 'relative',
        }}
        {...other}
      />
    )
  }
)
