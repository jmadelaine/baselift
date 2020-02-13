/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'

export const Flex = forwardRef((props, ref) => (
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
