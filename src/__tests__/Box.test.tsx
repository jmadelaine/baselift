/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Box } from '../Box'

expect.extend(matchers)

const render = (el: ReactElement) => create(el).toJSON() || ({} as ReactTestRendererJSON)

describe('Box', () => {
  it('renders', () => {
    const { type } = render(<Box />)

    expect(type).toBe('div')
  })
  it('renders children', () => {
    const { children } = render(
      <Box>
        <div />
      </Box>
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)
    expect(c[0].type).toBe('div')
  })
  it('accepts basic html props', () => {
    const { props } = render(<Box id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('has default style', () => {
    const res = render(<Box />)

    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('position', 'relative')
  })
  it('accepts css prop', () => {
    const res = render(
      <Box
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Box
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
})
