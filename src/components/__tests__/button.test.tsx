/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Button } from '../button'

expect.extend(matchers)

const render = (el: ReactElement) => create(el).toJSON() || ({} as ReactTestRendererJSON)

describe('Button', () => {
  it('renders', () => {
    const { type } = render(<Button />)

    expect(type).toBe('button')
  })
  it('renders children', () => {
    const { children } = render(<Button>Some text</Button>)

    const c = children as string[]

    expect(c).toHaveLength(1)
    expect(c[0]).toBe('Some text')
  })
  it('has default props', () => {
    const { props } = render(<Button />)

    expect(props).toMatchObject({
      type: 'button',
    })
  })
  it('accepts basic html props', () => {
    const { props } = render(<Button id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('allows default props to be overwritten', () => {
    const { props } = render(<Button type="submit" />)

    expect(props).not.toMatchObject({
      type: 'button',
    })
    expect(props).toMatchObject({
      type: 'submit',
    })
  })
  it('has default style', () => {
    const res = render(<Button />)

    expect(res).toHaveStyleRule('appearance', 'none')
    expect(res).toHaveStyleRule('background', '0')
    expect(res).toHaveStyleRule('border', '0')
    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('color', 'inherit')
    expect(res).toHaveStyleRule('cursor', 'pointer')
    expect(res).toHaveStyleRule('display', 'inline-block')
    expect(res).toHaveStyleRule('font-family', 'inherit')
    expect(res).toHaveStyleRule('font-size', '1rem')
    expect(res).toHaveStyleRule('line-height', 'inherit')
    expect(res).toHaveStyleRule('margin', '0')
    expect(res).toHaveStyleRule('padding', '0')
    expect(res).toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('text-overflow', 'ellipsis')
    expect(res).toHaveStyleRule('user-select', 'none')
    expect(res).toHaveStyleRule('vertical-align', 'middle')
    expect(res).toHaveStyleRule('-webkit-tap-highlight-color', 'transparent')
    expect(res).toHaveStyleRule('-webkit-touch-callout', 'none')
    expect(res).toHaveStyleRule('white-space', 'nowrap')
    expect(res).toHaveStyleRule('cursor', 'not-allowed', { target: ':disabled' })
    expect(res).toHaveStyleRule('z-index', '1', { target: ':focus' })
  })
  it('accepts css prop', () => {
    const res = render(
      <Button
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Button
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
})
