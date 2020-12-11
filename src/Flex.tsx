/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ComponentProps, forwardRef } from 'react'
import { Box } from './Box'

export const Flex = forwardRef<HTMLDivElement, ComponentProps<typeof Box>>((props, ref) => (
  <Box
    ref={ref}
    css={{
      display: 'flex',
    }}
    {...props}
  />
))

export default Flex
