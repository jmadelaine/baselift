import styled from 'styled-components'
import {
    alignItems,
    alignContent,
    alignSelf,
    border,
    color,
    compose,
    display,
    flex,
    flexDirection,
    flexWrap,
    height,
    justifyContent,
    justifyItems,
    justifySelf,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    position,
    space,
    textAlign,
    typography,
    variant,
    width,
} from 'styled-system'

const baseStyles = [
    alignSelf,
    border,
    color,
    display,
    flex,
    height,
    justifySelf,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    position,
    space,
    textAlign,
    width,
]

const basePropTypes = {
    ...alignSelf.propTypes,
    ...border.propTypes,
    ...color.propTypes,
    ...display.propTypes,
    ...flex.propTypes,
    ...height.propTypes,
    ...justifySelf.propTypes,
    ...maxHeight.propTypes,
    ...maxWidth.propTypes,
    ...minHeight.propTypes,
    ...minWidth.propTypes,
    ...order.propTypes,
    ...position.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
    ...width.propTypes,
}

const flexBoxStyles = [
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    justifyItems,
]

const flexBoxPropTypes = {
    ...alignContent.propTypes,
    ...alignItems.propTypes,
    ...flexDirection.propTypes,
    ...flexWrap.propTypes,
    ...justifyContent.propTypes,
    ...justifyItems.propTypes,
}

const typographyStyles = [
    typography,
    variant({
        key: 'typography',
    }),
]

const typographyPropTypes = { ...typography.propTypes, ...variant.propTypes }

export const Box = styled('div')(
    {
        boxSizing: 'border-box',
    },
    compose(...baseStyles)
)

Box.propTypes = {
    ...basePropTypes,
}

export const Flex = styled('div')(
    {
        boxSizing: 'border-box',
    },
    compose(
        ...baseStyles,
        ...flexBoxStyles
    )
)

Flex.propTypes = {
    ...basePropTypes,
    ...flexBoxPropTypes,
}

Flex.defaultProps = {
    display: 'flex',
}

export const Typography = styled('div')(
    {
        boxSizing: 'border-box',
    },
    compose(
        ...baseStyles,
        ...typographyStyles
    )
)

Typography.propTypes = {
    ...basePropTypes,
    ...typographyPropTypes,
}

Typography.defaultProps = {
    variant: 'default',
}

// TODO: export svg component
