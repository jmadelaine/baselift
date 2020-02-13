/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react'

export const Flex = forwardRef<HTMLDivElement, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>(
  (props, ref) => (
    <div
      ref={ref}
      css={{
        boxSizing: 'border-box',
        display: 'flex',
        position: 'relative',
      }}
      {...props}
    />
  )
)
