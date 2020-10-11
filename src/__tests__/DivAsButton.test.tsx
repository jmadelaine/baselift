/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { DivAsButton } from '../DivAsButton'

expect.extend(matchers)

const render = (el: ReactElement) => (create(el).toJSON() || {}) as ReactTestRendererJSON

describe('DivAsButton', () => {
  it('renders', () => {
    const { type } = render(<DivAsButton />)

    expect(type).toBe('div')
  })
  it('renders children', () => {
    const { children } = render(<DivAsButton>Some text</DivAsButton>)

    const c = children as string[]

    expect(c).toHaveLength(1)
    expect(c[0]).toBe('Some text')
  })
  it('accepts basic html props', () => {
    const { props } = render(<DivAsButton id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('has default style', () => {
    const res = render(<DivAsButton />)
    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('position', 'relative')
  })
  it('accepts css prop', () => {
    const res = render(
      <DivAsButton
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <DivAsButton
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
})
