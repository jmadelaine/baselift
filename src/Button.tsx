/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, ButtonHTMLAttributes } from 'react'

const validButtonTypes = ['button', 'reset', 'submit'] as const

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: typeof validButtonTypes[number]
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      css={{
        alignItems: 'center',
        appearance: 'none',
        background: 0,
        border: 0,
        boxSizing: 'border-box',
        color: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        justifyContent: 'center',
        lineHeight: 1,
        margin: 0,
        padding: 0,
        position: 'relative',
        textOverflow: 'ellipsis',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        whiteSpace: 'nowrap',
      }}
      type={type}
      {...props}
    />
  )
)

export default Button
