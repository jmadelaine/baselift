/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, HTMLAttributes } from 'react'

export const Flex = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div
    ref={ref}
    css={{
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative',
    }}
    {...props}
  />
))

export default Flex
