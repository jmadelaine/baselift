/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, SVGAttributes } from 'react'

export interface IconProps {
  path?: string | string[]
  pathFill?: string | string[]
}

export const Icon = forwardRef<SVGSVGElement, IconProps & SVGAttributes<SVGSVGElement>>(
  ({ path, pathFill, ...other }, ref) => {
    const pathFills = typeof pathFill === 'object' ? pathFill : typeof pathFill === 'string' ? [pathFill] : []
    const paths = typeof path === 'object' ? path : typeof path === 'string' ? [path] : []

    return (
      <svg
        ref={ref}
        css={{
          color: 'inherit',
          width: '24px',
          height: '24px',
          userSelect: 'none',
          display: 'inline-block',
          fill: pathFills.length ? 'none' : 'currentColor',
          flexShrink: 0,
        }}
        focusable="false"
        viewBox="0 0 24 24"
        {...other}
      >
        {paths.map((p, i) => (
          <path
            key={i}
            fill={pathFills.length > i ? pathFills[i] : pathFills.length ? pathFills[pathFills.length - 1] : 'inherit'}
            d={p}
          />
        ))}
      </svg>
    )
  }
)
