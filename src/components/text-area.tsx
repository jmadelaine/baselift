/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, TextareaHTMLAttributes } from 'react'

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
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
))

export default TextArea
