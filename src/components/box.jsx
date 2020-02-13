/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'

export const Box = forwardRef((props, ref) => (
  <div
    ref={ref}
    css={{
      boxSizing: 'border-box',
      position: 'relative',
    }}
    {...props}
  />
))
