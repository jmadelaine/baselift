/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, HTMLProps } from 'react'

export const Label = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement>>(
  ({ ...other }, ref) => {
    return (
      <label
        ref={ref}
        css={{
          boxSizing: 'border-box',
          color: 'inherit',
          cursor: 'pointer',
          display: 'inline-block',
          position: 'relative',
        }}
        {...other}
      />
    )
  }
)

export default Label
