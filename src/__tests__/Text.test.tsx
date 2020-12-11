/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Text } from '../Text'

expect.extend(matchers)

const render = (el: ReactElement) => (create(el).toJSON() || {}) as ReactTestRendererJSON

describe('Text', () => {
  it('renders', () => {
    const { type } = render(<Text />)

    expect(type).toBe('div')
  })
  it('renders children', () => {
    const { children } = render(<Text>Some text</Text>)

    const c = children as string[]

    expect(c).toHaveLength(1)
    expect(c[0]).toBe('Some text')
  })
  it('accepts basic html props', () => {
    const { props } = render(<Text id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('has default style', () => {
    const res = render(<Text />)

    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('position', 'relative')
  })
  it('accepts css prop', () => {
    const res = render(
      <Text
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Text
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
  it('accepts element prop', () => {
    const { type } = render(<Text element="p" />)

    expect(type).toBe('p')
  })
})
