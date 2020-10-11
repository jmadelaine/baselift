/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, InputHTMLAttributes } from 'react'

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'url'
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', ...other }, ref) => (
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
      type={type}
      {...other}
    />
  )
)

export default TextInput
