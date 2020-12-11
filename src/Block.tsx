/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, HTMLAttributes } from 'react'

export const Block = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div
    ref={ref}
    css={{
      boxSizing: 'border-box',
      position: 'relative',
    }}
    {...props}
  />
))

export default Block
