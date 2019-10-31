/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

export const Box = forwardRef(({ children, ...other }, ref) => (
    <div
        css={{
            boxSizing: 'border-box',
            position: 'relative',
        }}
        {...other}
        ref={ref}
    >
        {children}
    </div>
))

export const Flex = forwardRef(({ children, ...other }, ref) => (
    <div
        css={{
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative',
        }}
        {...other}
        ref={ref}
    >
        {children}
    </div>
))

export const Text = forwardRef(({ children, element, ...other }, ref) => {
    const C = element || 'div'
    return (
        <C
            css={{
                boxSizing: 'border-box',
                position: 'relative',
            }}
            ref={ref}
            {...other}
        >
            {children}
        </C>
    )
})

Text.propTypes = {
    element: PropTypes.oneOf([
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
    ]),
}
