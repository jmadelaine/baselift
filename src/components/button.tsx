/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, ButtonHTMLAttributes } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
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
        WebkitTouchCallout: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        '&:disabled': {
          cursor: 'not-allowed',
        },
        '&:focus': {
          zIndex: 1,
        },
      }}
      type="button"
      {...props}
    />
  )
)
