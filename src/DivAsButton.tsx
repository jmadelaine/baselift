/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import { Block } from './Block'

interface DivAsButtonProps extends ComponentProps<typeof Block> {
  onClick?: () => void
}

export const DivAsButton = forwardRef<HTMLDivElement, PropsWithChildren<DivAsButtonProps>>(
  ({ onClick, ...props }, ref) => {
    let innerRef: HTMLDivElement | null = null

    return (
      <Block
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
