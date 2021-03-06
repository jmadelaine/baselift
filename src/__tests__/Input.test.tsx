/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Input } from '../Input'

expect.extend(matchers)

const render = (el: ReactElement) => (create(el).toJSON() || {}) as ReactTestRendererJSON

describe('Input', () => {
  it('renders', () => {
    const { type } = render(<Input />)

    expect(type).toBe('input')
  })
  it('accepts basic html props', () => {
    const { props } = render(<Input id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('allows default props to be overwritten', () => {
    const { props } = render(<Input type="number" />)

    expect(props).not.toMatchObject({
      type: 'text',
    })
    expect(props).toMatchObject({
      type: 'number',
    })
  })
  it('has default style', () => {
    const res = render(<Input />)

    expect(res).toHaveStyleRule('appearance', 'none')
    expect(res).toHaveStyleRule('background', '0')
    expect(res).toHaveStyleRule('border', '0')
    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('color', 'inherit')
    expect(res).toHaveStyleRule('display', 'inline-block')
    expect(res).toHaveStyleRule('font-family', 'inherit')
    expect(res).toHaveStyleRule('font-size', '1rem')
    expect(res).toHaveStyleRule('line-height', 'inherit')
    expect(res).toHaveStyleRule('margin', '0')
    expect(res).toHaveStyleRule('padding', '0')
    expect(res).toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('vertical-align', 'middle')
    expect(res).toHaveStyleRule('-webkit-tap-highlight-color', 'transparent')
    expect(res).toHaveStyleRule('color', 'inherit', { target: '::placeholder' })
    expect(res).toHaveStyleRule('opacity', '0.5', { target: '::placeholder' })
    expect(res).toHaveStyleRule('cursor', 'not-allowed', { target: ':disabled' })
    expect(res).toHaveStyleRule('z-index', '1', { target: ':focus' })
  })
  it('accepts css prop', () => {
    const res = render(
      <Input
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Input
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
  it('renders value', () => {
    const { props } = render(<Input value="some text" />)

    expect(props).toMatchObject({
      value: 'some text',
    })
  })
})
