/** @jsx jsx */
import { jsx } from '@emotion/react'
import { forwardRef, SVGAttributes } from 'react'

interface IconProps extends SVGAttributes<SVGSVGElement> {
  pathDef?: string | string[]
  pathFill?: string | string[]
  pathStroke?: string | string[]
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ pathDef, pathFill, pathStroke, children, ...other }, ref) => {
    const pathDefs =
      typeof pathDef === 'object' ? pathDef : typeof pathDef === 'string' ? [pathDef] : []
    const pathFills =
      typeof pathFill === 'object' ? pathFill : typeof pathFill === 'string' ? [pathFill] : []
    const pathStrokes =
      typeof pathStroke === 'object'
        ? pathStroke
        : typeof pathStroke === 'string'
        ? [pathStroke]
        : []

    return (
      <svg
        ref={ref}
        css={{
          color: 'inherit',
          display: 'inline-block',
          fill: pathFills.length ? 'none' : 'currentColor',
          flexShrink: 0,
          height: '24px',
          stroke: 'none',
          userSelect: 'none',
          width: '24px',
        }}
        focusable="false"
        viewBox="0 0 24 24"
        {...other}
      >
        {pathDefs.map((p, i) => (
          <path
            key={i}
            fill={
              pathFills.length > i
                ? pathFills[i]
                : pathFills.length
                ? pathFills[pathFills.length - 1]
                : 'inherit'
            }
            stroke={
              pathStrokes.length > i
                ? pathStrokes[i]
                : pathStrokes.length
                ? pathStrokes[pathStrokes.length - 1]
                : 'inherit'
            }
            d={p}
          />
        ))}
        {children}
      </svg>
    )
  }
)

export default Icon
