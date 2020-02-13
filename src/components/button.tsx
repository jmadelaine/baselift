/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => (
  <button
    ref={ref}
    css={{
      appearance: 'none',
      background: 'none',
      border: 0,
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'flex',
      outline: 0,
      position: 'relative',
      textOverflow: 'ellipsis',
      userSelect: 'none',
      WebkitFontSmoothing: 'subpixel-antialiased',
      WebkitTouchCallout: 'none',
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:focus': {
        zIndex: 1,
      },
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
    }}
    type="button"
    {...props}
  />
))
