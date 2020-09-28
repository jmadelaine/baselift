/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, InputHTMLAttributes } from 'react'

const validTextFieldTypes = ['email', 'hidden', 'password', 'tel', 'text', 'url'] as const

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: typeof validTextFieldTypes[number]
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ type, ...other }, ref) => (
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
    type={type && validTextFieldTypes.indexOf(type) > -1 ? type : 'text'}
    {...other}
  />
))

export default TextField
