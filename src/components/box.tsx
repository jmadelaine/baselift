/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react'

export const Box = forwardRef<HTMLDivElement, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>(
  (props, ref) => (
    <div
      ref={ref}
      css={{
        boxSizing: 'border-box',
        position: 'relative',
      }}
      {...props}
    />
  )
)
