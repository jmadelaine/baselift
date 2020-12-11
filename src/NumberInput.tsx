/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ComponentProps, forwardRef } from 'react'
import Input from './Input'

type NumberInputProps = Omit<ComponentProps<typeof Input>, 'type'>

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => (
  <Input ref={ref} {...props} type="number" />
))

export default NumberInput
