/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Label } from '../Label'

expect.extend(matchers)

const render = (el: ReactElement) => create(el).toJSON() || ({} as ReactTestRendererJSON)

describe('Label', () => {
  it('renders', () => {
    const { type } = render(<Label />)

    expect(type).toBe('label')
  })
  it('renders children', () => {
    const { children } = render(<Label>Some label</Label>)

    const c = children as string[]

    expect(c).toHaveLength(1)
    expect(c[0]).toBe('Some label')
  })
  it('accepts basic html props', () => {
    const { props } = render(<Label id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('accepts htmlFor prop', () => {
    const { props } = render(<Label htmlFor="someInputId" />)

    expect(props).toMatchObject({
      htmlFor: 'someInputId',
    })
  })
  it('has default style', () => {
    const res = render(<Label />)

    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('color', 'inherit')
    expect(res).toHaveStyleRule('cursor', 'pointer')
    expect(res).toHaveStyleRule('display', 'inline-block')
  })
  it('accepts css prop', () => {
    const res = render(
      <Label
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Label
        css={{
          cursor: 'default',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('cursor', 'pointer')
    expect(res).toHaveStyleRule('cursor', 'default')
  })
})
