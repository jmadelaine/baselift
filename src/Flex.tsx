/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ComponentProps, forwardRef, HTMLAttributes } from 'react'

const distributeOptions = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
} as const

const alignOptions = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
} as const

const directionOptions = {
  col: 'column',
  row: 'row',
} as const

type FlexProps = {
  align?: keyof typeof alignOptions
  direction?: keyof typeof directionOptions
  distribute?: keyof typeof distributeOptions
  gap?: string
}

type FlexChildProps = {
  alignSelf?: keyof typeof alignOptions
  basis?: number | string
  flex?: number | string
  grow?: number
  shrink?: number
}

type AsButtonProps = { asButton?: boolean; disabled?: boolean }

type ScrollableProps = { scrollable?: boolean }

export const Block = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & FlexChildProps & AsButtonProps
>(
  (
    {
      grow,
      shrink,
      basis,
      flex,
      alignSelf,
      asButton = false,
      disabled = false,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      css={{
        boxSizing: 'border-box',
        position: 'relative',
        flex,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        ...(!!alignSelf && { alignSelf: alignOptions[alignSelf] }),
        ...(asButton && {
          cursor: 'pointer',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          '& > *:not(button):not(input):not(textarea):not([role=button])': {
            pointerEvents: 'none',
          },
        }),
      }}
      {...(asButton && {
        role: 'button',
        tabIndex: 0,
        // prevents child button clicks from clicking this button
        onClick: e => e.target === e.currentTarget && !disabled && onClick?.(e),
        onKeyDown: e => {
          onKeyDown?.(e)
          // click this button on Enter or Space key
          // prevents child onKeyDown events from clicking this button
          if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ') && !disabled)
            e.currentTarget.click()
        },
      })}
      {...props}
    />
  )
)

export const Flex = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof Block> & FlexProps & ScrollableProps
>(
  (
    {
      direction = 'row',
      gap,
      distribute = 'start',
      align = 'stretch',
      flex,
      scrollable = false,
      ...props
    },
    ref
  ) => {
    return (
      <Block
        ref={ref}
        flex={flex ?? scrollable ? '1 1 0' : undefined}
        css={{
          alignItems: alignOptions[align],
          display: 'flex',
          flexDirection: directionOptions[direction],
          gap,
          justifyContent: distributeOptions[distribute],
          '& > *': { flexShrink: 0 },
          ...(scrollable &&
            ({
              row: { minWidth: 0, overflowX: 'auto' },
              col: { minHeight: 0, overflowY: 'auto' },
            } as const)[direction]),
        }}
        {...props}
      />
    )
  }
)
