/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import { Box } from './Box'

interface DivAsButtonProps extends ComponentProps<typeof Box> {
  onClick?: () => void
}

export const DivAsButton = forwardRef<HTMLDivElement, PropsWithChildren<DivAsButtonProps>>(
  ({ onClick, ...props }, ref) => {
    let innerRef: HTMLDivElement | null = null

    return (
      <Box
        ref={r => {
          if (typeof ref === 'function') {
            ref(r)
          } else if (ref) {
            ref.current = r
          }
          innerRef = r
        }}
        css={{
          cursor: 'pointer',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          '&:focus': {
            zIndex: 1,
          },
        }}
        role="button"
        tabIndex={0}
        onClick={e => {
          // prevents child onClick events from firing this event
          if (onClick && e.target === innerRef) {
            onClick()
          }
        }}
        onKeyDown={e => {
          // prevents child onKeyDown events from firing this event
          if (onClick && e.target === innerRef && (e.key === 'Enter' || e.key === ' ')) {
            onClick()
          }
        }}
        {...props}
      />
    )
  }
)

export default DivAsButton
