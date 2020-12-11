/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, InputHTMLAttributes } from 'react'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <input
      ref={ref}
      css={{
        appearance: 'none',
        background: 0,
        border: 0,
        boxSizing: 'border-box',
        color: 'inherit',
        display: 'inline-block',
        fontFamily: 'inherit',
        fontSize: '1rem',
        lineHeight: 'inherit',
        margin: 0,
        padding: 0,
        position: 'relative',
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        '::placeholder': {
          color: 'inherit',
          opacity: '0.5',
        },
        '&:disabled': {
          cursor: 'not-allowed',
        },
        '&:focus': {
          zIndex: 1,
        },
      }}
      {...props}
    />
  )
)

export default Input
