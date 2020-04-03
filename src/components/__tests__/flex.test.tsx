/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Flex } from '../flex'

expect.extend(matchers)

const render = (el: ReactElement) => create(el).toJSON() || ({} as ReactTestRendererJSON)

describe('Flex', () => {
  it('renders', () => {
    const { type } = render(<Flex />)

    expect(type).toBe('div')
  })
  it('renders children', () => {
    const { children } = render(
      <Flex>
        <div />
      </Flex>
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)
    expect(c[0].type).toBe('div')
  })
  it('accepts basic html props', () => {
    const { props } = render(<Flex id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('has default style', () => {
    const res = render(<Flex />)

    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('display', 'flex')
  })
  it('accepts css prop', () => {
    const res = render(
      <Flex
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Flex
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
})
