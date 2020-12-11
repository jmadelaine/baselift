/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ComponentProps, forwardRef } from 'react'
import { Block } from './Block'

export const Flex = forwardRef<HTMLDivElement, ComponentProps<typeof Block>>((props, ref) => (
  <Block
    ref={ref}
    css={{
      display: 'flex',
    }}
    {...props}
  />
))

export default Flex
