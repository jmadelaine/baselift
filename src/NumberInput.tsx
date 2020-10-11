/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ComponentProps, forwardRef } from 'react'
import Input from './Input'

export type NumberInputProps = Omit<ComponentProps<typeof Input>, 'type'>

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => (
  <Input ref={ref} {...props} type="number" />
))

export default NumberInput
