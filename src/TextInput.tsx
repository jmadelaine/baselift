/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ComponentProps, forwardRef } from 'react'
import Input from './Input'

interface TextInputProps extends Omit<ComponentProps<typeof Input>, 'type'> {
  type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'url'
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', ...other }, ref) => <Input ref={ref} {...other} type={type} />
)

export default TextInput
