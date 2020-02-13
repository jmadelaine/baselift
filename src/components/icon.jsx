/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'

export const Icon = forwardRef(({ colors = [], paths = [], ...other }, ref) => (
  <svg
    ref={ref}
    css={{
      color: 'inherit',
      width: '24px',
      height: '24px',
      userSelect: 'none',
      display: 'inline-block',
      fill: colors.length ? 'none' : 'currentColor',
      flexShrink: 0,
    }}
    focusable="false"
    viewBox="0 0 24 24"
    {...other}
  >
    {paths.map((p, i) => (
      <path
        key={i}
        fill={colors.length > i ? colors[i] : colors.length ? colors[colors.length - 1] : 'inherit'}
        d={p}
      />
    ))}
  </svg>
))
