import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const Box = styled.div({
    boxSizing: 'border-box',
})

export const Flex = styled.div({
    boxSizing: 'border-box',
    display: 'flex',
})

const _typography = forwardRef(({ children, element, ...other }, ref) => {
    const Component = element || 'p'
    return (
        <Component ref={ref} {...other}>
            {children}
        </Component>
    )
})

export const Typography = styled(_typography)({
    boxSizing: 'border-box',
})

Typography.propTypes = {
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
