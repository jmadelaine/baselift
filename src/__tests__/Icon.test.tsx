/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Icon } from '../Icon'

expect.extend(matchers)

const render = (el: ReactElement) => create(el).toJSON() || ({} as ReactTestRendererJSON)

describe('Icon', () => {
  it('renders', () => {
    const { type } = render(<Icon />)

    expect(type).toBe('svg')
  })
  it('renders children', () => {
    const { children } = render(
      <Icon>
        <div />
      </Icon>
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)
    expect(c[0].type).toBe('div')
  })
  it('has default props', () => {
    const { props } = render(<Icon />)

    expect(props).toMatchObject({
      focusable: 'false',
      viewBox: '0 0 24 24',
    })
  })
  it('accepts basic html props', () => {
    const { props } = render(<Icon id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('allows default props to be overwritten', () => {
    const { props } = render(<Icon viewBox="0 0 48 48" />)

    expect(props).not.toMatchObject({
      viewBox: '0 0 24 24',
    })
    expect(props).toMatchObject({
      viewBox: '0 0 48 48',
    })
  })
  it('has default style', () => {
    const res = render(<Icon />)

    expect(res).toHaveStyleRule('color', 'inherit')
    expect(res).toHaveStyleRule('width', '24px')
    expect(res).toHaveStyleRule('height', '24px')
    expect(res).toHaveStyleRule('user-select', 'none')
    expect(res).toHaveStyleRule('display', 'inline-block')
    expect(res).toHaveStyleRule('fill', 'currentColor')
    expect(res).toHaveStyleRule('stroke', 'none')
    expect(res).toHaveStyleRule('flex-shrink', '0')
  })
  it('accepts css prop', () => {
    const res = render(
      <Icon
        css={{
          position: 'relative',
        }}
      />
    )

    expect(res).toHaveStyleRule('position', 'relative')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Icon
        css={{
          fill: 'hotpink',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('fill', 'currentColor')
    expect(res).toHaveStyleRule('fill', 'hotpink')
  })
  it('accepts string as pathDef prop', () => {
    const { children } = render(<Icon pathDef="M0 0h24v24H0z" />)

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)

    expect(c[0].type).toBe('path')
    expect(c[0].props).toMatchObject({
      d: 'M0 0h24v24H0z',
      fill: 'inherit',
    })
  })
  it('accepts string array as pathDef prop', () => {
    const { children } = render(<Icon pathDef={['M0 0h24v24H0z', 'M0 0h16v16H0z']} />)

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(2)

    expect(c[0].type).toBe('path')
    expect(c[0].props).toMatchObject({
      d: 'M0 0h24v24H0z',
      fill: 'inherit',
    })

    expect(c[1].type).toBe('path')
    expect(c[1].props).toMatchObject({
      d: 'M0 0h16v16H0z',
      fill: 'inherit',
    })
  })
  it('accepts string as pathFill prop', () => {
    const { children } = render(<Icon pathDef="M0 0h24v24H0z" pathFill="hotpink" />)

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)
    expect(c[0].props).toMatchObject({
      fill: 'hotpink',
    })
  })
  it('accepts string array as pathFill prop', () => {
    const { children } = render(
      <Icon pathDef={['M0 0h24v24H0z', 'M0 0h16v16H0z']} pathFill={['hotpink', 'tomato']} />
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(2)

    expect(c[0].type).toBe('path')
    expect(c[0].props).toMatchObject({
      fill: 'hotpink',
    })

    expect(c[1].type).toBe('path')
    expect(c[1].props).toMatchObject({
      fill: 'tomato',
    })
  })
  it('sets remaining path fills to final pathFill value if pathDef.length > pathFill.length', () => {
    const { children } = render(
      <Icon
        pathDef={['M0 0h24v24H0z', 'M0 0h16v16H0z', 'M0 0h8v8H0z']}
        pathFill={['hotpink', 'tomato']}
      />
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(3)

    expect(c[0].type).toBe('path')
    expect(c[0].props).toMatchObject({
      d: 'M0 0h24v24H0z',
      fill: 'hotpink',
    })

    expect(c[1].type).toBe('path')
    expect(c[1].props).toMatchObject({
      d: 'M0 0h16v16H0z',
      fill: 'tomato',
    })

    expect(c[2].type).toBe('path')
    expect(c[2].props).toMatchObject({
      d: 'M0 0h8v8H0z',
      fill: 'tomato',
    })
  })
  it('sets default svg fill to none when a value is provided to pathFill prop', () => {
    const res = render(<Icon pathFill="hotpink" />)

    expect(res).not.toHaveStyleRule('fill', 'currentColor')
    expect(res).toHaveStyleRule('fill', 'none')
  })

  it('accepts string as pathStroke prop', () => {
    const { children } = render(<Icon pathDef="M0 0h24v24H0z" pathStroke="hotpink" />)

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)
    expect(c[0].props).toMatchObject({
      stroke: 'hotpink',
    })
  })
  it('accepts string array as pathStroke prop', () => {
    const { children } = render(
      <Icon pathDef={['M0 0h24v24H0z', 'M0 0h16v16H0z']} pathStroke={['hotpink', 'tomato']} />
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(2)

    expect(c[0].type).toBe('path')
    expect(c[0].props).toMatchObject({
      stroke: 'hotpink',
    })

    expect(c[1].type).toBe('path')
    expect(c[1].props).toMatchObject({
      stroke: 'tomato',
    })
  })
  it('sets remaining path strokes to final pathStroke value if pathDef.length > pathStroke.length', () => {
    const { children } = render(
      <Icon
        pathDef={['M0 0h24v24H0z', 'M0 0h16v16H0z', 'M0 0h8v8H0z']}
        pathStroke={['hotpink', 'tomato']}
      />
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(3)

    expect(c[0].type).toBe('path')
    expect(c[0].props).toMatchObject({
      d: 'M0 0h24v24H0z',
      stroke: 'hotpink',
    })

    expect(c[1].type).toBe('path')
    expect(c[1].props).toMatchObject({
      d: 'M0 0h16v16H0z',
      stroke: 'tomato',
    })

    expect(c[2].type).toBe('path')
    expect(c[2].props).toMatchObject({
      d: 'M0 0h8v8H0z',
      stroke: 'tomato',
    })
  })
})
