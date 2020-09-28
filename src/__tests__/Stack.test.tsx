/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Stack } from '../Stack'

expect.extend(matchers)

const render = (el: ReactElement) => (create(el).toJSON() || {}) as ReactTestRendererJSON

describe('Stack', () => {
  it('renders', () => {
    const { type } = render(<Stack />)

    expect(type).toBe('div')
  })
  it('renders children', () => {
    const { children } = render(
      <Stack>
        <div />
      </Stack>
    )

    const c = children as ReactTestRendererJSON[]

    expect(c).toHaveLength(1)
    expect(c[0].type).toBe('div')
  })
  it('accepts basic html props', () => {
    const { props } = render(<Stack id="someId" />)

    expect(props).toMatchObject({
      id: 'someId',
    })
  })
  it('has default style', () => {
    const res = render(<Stack />)

    expect(res).toHaveStyleRule('box-sizing', 'border-box')
    expect(res).toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('display', 'flex')
    expect(res).toHaveStyleRule('flex-direction', 'row')
    expect(res).toHaveStyleRule('justify-content', 'flex-start')
    expect(res).toHaveStyleRule('align-items', 'flex-start')
  })
  it('accepts css prop', () => {
    const res = render(
      <Stack
        css={{
          color: 'hotpink',
        }}
      />
    )

    expect(res).toHaveStyleRule('color', 'hotpink')
  })
  it('allows default style to be overwritten', () => {
    const res = render(
      <Stack
        css={{
          position: 'absolute',
        }}
      />
    )

    expect(res).not.toHaveStyleRule('position', 'relative')
    expect(res).toHaveStyleRule('position', 'absolute')
  })
  it('accepts direction prop', () => {
    const row = render(<Stack direction="row" />)
    const column = render(<Stack direction="column" />)

    expect(row).toHaveStyleRule('flex-direction', 'row')
    expect(column).toHaveStyleRule('flex-direction', 'column')
  })
  it('accepts alignMain prop', () => {
    const start = render(<Stack alignMain="start" />)
    const center = render(<Stack alignMain="center" />)
    const end = render(<Stack alignMain="end" />)

    expect(start).toHaveStyleRule('justify-content', 'flex-start')
    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(end).toHaveStyleRule('justify-content', 'flex-end')
  })
  it('accepts alignCross prop', () => {
    const start = render(<Stack alignCross="start" />)
    const center = render(<Stack alignCross="center" />)
    const end = render(<Stack alignCross="end" />)

    expect(start).toHaveStyleRule('align-items', 'flex-start')
    expect(center).toHaveStyleRule('align-items', 'center')
    expect(end).toHaveStyleRule('align-items', 'flex-end')
  })
  it('accepts space prop', () => {
    const between = render(<Stack space="between" />)
    const around = render(<Stack space="around" />)
    const evenly = render(<Stack space="evenly" />)

    expect(between).toHaveStyleRule('justify-content', 'space-between')
    expect(around).toHaveStyleRule('justify-content', 'space-around')
    expect(evenly).toHaveStyleRule('justify-content', 'space-evenly')
  })
  it('overrides alignMain prop with space prop', () => {
    const center = render(<Stack alignMain="center" />)
    const between = render(<Stack alignMain="center" space="between" />)

    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(between).toHaveStyleRule('justify-content', 'space-between')
  })
  it('accepts stretch prop', () => {
    const res = render(<Stack stretch={true} />)

    expect(res).toHaveStyleRule('align-items', 'stretch')
  })
  it('overrides alignCross prop with stretch prop', () => {
    const center = render(<Stack alignCross="center" />)
    const stretch = render(<Stack alignCross="center" stretch={true} />)

    expect(center).toHaveStyleRule('align-items', 'center')
    expect(stretch).toHaveStyleRule('align-items', 'stretch')
  })
  it('accepts custom space prop', () => {
    const renderWithChildrenAndSpace = (space: string | number) =>
      render(
        <Stack space={space}>
          <div />
          <div />
        </Stack>
      )

    const px = renderWithChildrenAndSpace('5px').children as ReactTestRendererJSON[]
    const em = renderWithChildrenAndSpace('5em').children as ReactTestRendererJSON[]
    const rem = renderWithChildrenAndSpace('5rem').children as ReactTestRendererJSON[]
    const str = renderWithChildrenAndSpace('5').children as ReactTestRendererJSON[]
    const num = renderWithChildrenAndSpace(5).children as ReactTestRendererJSON[]

    expect(px).toHaveLength(3)
    expect(px[1].type).toBe('div')
    expect(px[1]).toHaveStyleRule('flex', '0 0 5px')
    expect(px[1]).toHaveStyleRule('block-size', '5px')

    expect(em).toHaveLength(3)
    expect(em[1].type).toBe('div')
    expect(em[1]).toHaveStyleRule('flex', '0 0 5em')
    expect(em[1]).toHaveStyleRule('block-size', '5em')

    expect(rem).toHaveLength(3)
    expect(rem[1].type).toBe('div')
    expect(rem[1]).toHaveStyleRule('flex', '0 0 5rem')
    expect(rem[1]).toHaveStyleRule('block-size', '5rem')

    expect(str).toHaveLength(3)
    expect(str[1].type).toBe('div')
    expect(str[1]).toHaveStyleRule('flex', '0 0 5px')
    expect(str[1]).toHaveStyleRule('block-size', '5px')

    expect(num).toHaveLength(3)
    expect(num[1].type).toBe('div')
    expect(num[1]).toHaveStyleRule('flex', '0 0 5px')
    expect(num[1]).toHaveStyleRule('block-size', '5px')
  })
  it('ignores 0 value or invalid custom space prop', () => {
    const renderWithChildrenAndSpace = (space: string | number) =>
      render(
        <Stack space={space}>
          <div />
          <div />
        </Stack>
      )

    // Zero value
    const px = renderWithChildrenAndSpace('0px').children as ReactTestRendererJSON[]
    const em = renderWithChildrenAndSpace('0em').children as ReactTestRendererJSON[]
    const rem = renderWithChildrenAndSpace('0rem').children as ReactTestRendererJSON[]
    const str = renderWithChildrenAndSpace('0').children as ReactTestRendererJSON[]
    const num = renderWithChildrenAndSpace(0).children as ReactTestRendererJSON[]

    // Invalid
    const alphas = renderWithChildrenAndSpace('abc').children as ReactTestRendererJSON[]
    const empty = renderWithChildrenAndSpace('').children as ReactTestRendererJSON[]
    const nan = renderWithChildrenAndSpace(NaN).children as ReactTestRendererJSON[]

    expect(px).toHaveLength(2)
    expect(em).toHaveLength(2)
    expect(rem).toHaveLength(2)
    expect(str).toHaveLength(2)
    expect(num).toHaveLength(2)
    expect(alphas).toHaveLength(2)
    expect(empty).toHaveLength(2)
    expect(nan).toHaveLength(2)
  })
  it('does not override alignMain with custom space prop', () => {
    const center = render(<Stack alignMain="center" />)
    const space = render(<Stack alignMain="center" space="5px" />)

    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(space).toHaveStyleRule('justify-content', 'center')
  })
})
