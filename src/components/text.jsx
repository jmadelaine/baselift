/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

export const Text = forwardRef(({ element, ...other }, ref) => {
  const Component = element || 'div'
  return (
    <Component
      ref={ref}
      css={{
        boxSizing: 'border-box',
        position: 'relative',
      }}
      {...other}
    />
  )
})

Text.propTypes = {
  element: PropTypes.oneOf(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
}
