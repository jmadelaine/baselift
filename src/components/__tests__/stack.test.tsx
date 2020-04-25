/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ReactElement } from 'react'
import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { Stack } from '../stack'

expect.extend(matchers)

const render = (el: ReactElement) => create(el).toJSON() || ({} as ReactTestRendererJSON)

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
  it('accepts space prop', () => {
    const between = render(<Stack space="between" />)
    const around = render(<Stack space="around" />)
    const evenly = render(<Stack space="evenly" />)

    expect(between).toHaveStyleRule('justify-content', 'space-between')
    expect(around).toHaveStyleRule('justify-content', 'space-around')
    expect(evenly).toHaveStyleRule('justify-content', 'space-evenly')
  })
  it('accepts direction prop', () => {
    const row = render(<Stack direction="row" />)
    const column = render(<Stack direction="column" />)

    expect(row).toHaveStyleRule('flex-direction', 'row')
    expect(column).toHaveStyleRule('flex-direction', 'column')
  })
  it('accepts hAlign prop style based on direction', () => {
    const rowLeft = render(<Stack direction="row" hAlign="left" />)
    const columnLeft = render(<Stack direction="column" hAlign="left" />)
    const rowCenter = render(<Stack direction="row" hAlign="center" />)
    const columnCenter = render(<Stack direction="column" hAlign="center" />)
    const rowRight = render(<Stack direction="row" hAlign="right" />)
    const columnRight = render(<Stack direction="column" hAlign="right" />)

    expect(rowLeft).toHaveStyleRule('justify-content', 'flex-start')
    expect(rowLeft).toHaveStyleRule('align-items', 'flex-start')
    expect(columnLeft).toHaveStyleRule('justify-content', 'flex-start')
    expect(columnLeft).toHaveStyleRule('align-items', 'flex-start')
    expect(rowCenter).toHaveStyleRule('justify-content', 'center')
    expect(rowCenter).toHaveStyleRule('align-items', 'flex-start')
    expect(columnCenter).toHaveStyleRule('justify-content', 'flex-start')
    expect(columnCenter).toHaveStyleRule('align-items', 'center')
    expect(rowRight).toHaveStyleRule('justify-content', 'flex-end')
    expect(rowRight).toHaveStyleRule('align-items', 'flex-start')
    expect(columnRight).toHaveStyleRule('justify-content', 'flex-start')
    expect(columnRight).toHaveStyleRule('align-items', 'flex-end')
  })
  it('accepts vAlign prop style based on direction', () => {
    const rowTop = render(<Stack direction="row" vAlign="top" />)
    const columnTop = render(<Stack direction="column" vAlign="top" />)
    const rowCenter = render(<Stack direction="row" vAlign="center" />)
    const columnCenter = render(<Stack direction="column" vAlign="center" />)
    const rowBottom = render(<Stack direction="row" vAlign="bottom" />)
    const columnBottom = render(<Stack direction="column" vAlign="bottom" />)

    expect(rowTop).toHaveStyleRule('justify-content', 'flex-start')
    expect(rowTop).toHaveStyleRule('align-items', 'flex-start')
    expect(columnTop).toHaveStyleRule('justify-content', 'flex-start')
    expect(columnTop).toHaveStyleRule('align-items', 'flex-start')
    expect(rowCenter).toHaveStyleRule('justify-content', 'flex-start')
    expect(rowCenter).toHaveStyleRule('align-items', 'center')
    expect(columnCenter).toHaveStyleRule('justify-content', 'center')
    expect(columnCenter).toHaveStyleRule('align-items', 'flex-start')
    expect(rowBottom).toHaveStyleRule('justify-content', 'flex-start')
    expect(rowBottom).toHaveStyleRule('align-items', 'flex-end')
    expect(columnBottom).toHaveStyleRule('justify-content', 'flex-end')
    expect(columnBottom).toHaveStyleRule('align-items', 'flex-start')
  })
  it('overrides vAlign prop with space prop', () => {
    const res = render(<Stack direction="column" vAlign="center" space="between" />)

    expect(res).toHaveStyleRule('justify-content', 'space-between')
  })
  it('overrides hAlign prop with space prop', () => {
    const res = render(<Stack direction="row" hAlign="center" space="between" />)

    expect(res).toHaveStyleRule('justify-content', 'space-between')
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

    expect(em).toHaveLength(3)
    expect(em[1].type).toBe('div')
    expect(em[1]).toHaveStyleRule('flex', '0 0 5em')

    expect(rem).toHaveLength(3)
    expect(rem[1].type).toBe('div')
    expect(rem[1]).toHaveStyleRule('flex', '0 0 5rem')

    expect(str).toHaveLength(3)
    expect(str[1].type).toBe('div')
    expect(str[1]).toHaveStyleRule('flex', '0 0 5px')

    expect(num).toHaveLength(3)
    expect(num[1].type).toBe('div')
    expect(num[1]).toHaveStyleRule('flex', '0 0 5px')
  })
  it('does not override hAlign or vAlign when custom space prop is passed', () => {
    const res = render(<Stack direction="row" hAlign="center" vAlign="bottom" space="5px" />)

    expect(res).toHaveStyleRule('justify-content', 'center')
    expect(res).toHaveStyleRule('align-items', 'flex-end')
  })
  it('accepts stretch prop', () => {
    const res = render(<Stack stretch={true} />)

    expect(res).toHaveStyleRule('align-items', 'stretch')
  })
})
