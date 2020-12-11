/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, HTMLAttributes } from 'react'

export const Box = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div
    ref={ref}
    css={{
      boxSizing: 'border-box',
      position: 'relative',
    }}
    {...props}
  />
))

export default Box
