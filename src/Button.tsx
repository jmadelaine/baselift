/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, ButtonHTMLAttributes } from 'react'

const validButtonTypes = ['button', 'reset', 'submit'] as const

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: typeof validButtonTypes[number]
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type, ...other }, ref) => (
  <button
    ref={ref}
    css={{
      appearance: 'none',
      background: 0,
      border: 0,
      boxSizing: 'border-box',
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: '1rem',
      lineHeight: 'inherit',
      margin: 0,
      padding: 0,
      position: 'relative',
      textOverflow: 'ellipsis',
      userSelect: 'none',
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      WebkitTouchCallout: 'none',
      whiteSpace: 'nowrap',
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:focus': {
        zIndex: 1,
      },
    }}
    type={type && validButtonTypes.indexOf(type) > -1 ? type : 'button'}
    {...other}
  />
))

export default Button
