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
    const inline = render(<Stack direction="inline" />)
    const block = render(<Stack direction="block" />)

    expect(inline).toHaveStyleRule('flex-direction', 'row')
    expect(block).toHaveStyleRule('flex-direction', 'column')
  })
  it('accepts blockAlign prop', () => {
    const start = render(<Stack blockAlign="start" />)
    const center = render(<Stack blockAlign="center" />)
    const end = render(<Stack blockAlign="end" />)

    expect(start).toHaveStyleRule('align-items', 'flex-start')
    expect(center).toHaveStyleRule('align-items', 'center')
    expect(end).toHaveStyleRule('align-items', 'flex-end')
  })
  it('accepts inlineAlign prop', () => {
    const start = render(<Stack inlineAlign="start" />)
    const center = render(<Stack inlineAlign="center" />)
    const end = render(<Stack inlineAlign="end" />)

    expect(start).toHaveStyleRule('justify-content', 'flex-start')
    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(end).toHaveStyleRule('justify-content', 'flex-end')
  })
  it('accepts space prop', () => {
    const between = render(<Stack space="between" />)
    const around = render(<Stack space="around" />)
    const evenly = render(<Stack space="evenly" />)

    expect(between).toHaveStyleRule('justify-content', 'space-between')
    expect(around).toHaveStyleRule('justify-content', 'space-around')
    expect(evenly).toHaveStyleRule('justify-content', 'space-evenly')
  })
  it('overrides blockAlign prop with space prop when in block direction', () => {
    const center = render(<Stack direction="block" blockAlign="center" inlineAlign="end" />)
    const between = render(
      <Stack direction="block" blockAlign="center" inlineAlign="end" space="between" />
    )

    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(center).toHaveStyleRule('align-items', 'flex-end')
    expect(between).toHaveStyleRule('justify-content', 'space-between')
    expect(between).toHaveStyleRule('align-items', 'flex-end')
  })
  it('overrides inlineAlign prop with space prop when in inline direction', () => {
    const center = render(<Stack direction="inline" inlineAlign="center" blockAlign="end" />)
    const between = render(
      <Stack direction="inline" inlineAlign="center" blockAlign="end" space="between" />
    )

    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(center).toHaveStyleRule('align-items', 'flex-end')
    expect(between).toHaveStyleRule('justify-content', 'space-between')
    expect(between).toHaveStyleRule('align-items', 'flex-end')
  })
  it('accepts stretch prop', () => {
    const res = render(<Stack stretch={true} />)

    expect(res).toHaveStyleRule('align-items', 'stretch')
  })
  it('overrides blockAlign prop with stretch prop when in inline direction', () => {
    const center = render(<Stack direction="inline" blockAlign="center" inlineAlign="end" />)
    const stretch = render(
      <Stack direction="inline" blockAlign="center" inlineAlign="end" stretch={true} />
    )

    expect(center).toHaveStyleRule('justify-content', 'flex-end')
    expect(center).toHaveStyleRule('align-items', 'center')
    expect(stretch).toHaveStyleRule('justify-content', 'flex-end')
    expect(stretch).toHaveStyleRule('align-items', 'stretch')
  })
  it('overrides inlineAlign prop with stretch prop when in block direction', () => {
    const center = render(<Stack direction="block" blockAlign="center" inlineAlign="end" />)
    const stretch = render(
      <Stack direction="block" blockAlign="center" inlineAlign="end" stretch={true} />
    )

    expect(center).toHaveStyleRule('justify-content', 'center')
    expect(center).toHaveStyleRule('align-items', 'flex-end')
    expect(stretch).toHaveStyleRule('justify-content', 'center')
    expect(stretch).toHaveStyleRule('align-items', 'stretch')
  })
  it('accepts custom space prop', () => {
    const customSpace = render(<Stack space="5px" />)

    expect(customSpace).toHaveStyleRule('gap', '5px')
  })
  it('does not overwrite blockAlign or inlineAlign with custom space prop', () => {
    const customSpace = render(<Stack space="5px" blockAlign="center" inlineAlign="end" />)

    expect(customSpace).toHaveStyleRule('gap', '5px')
    expect(customSpace).toHaveStyleRule('justify-content', 'flex-end')
    expect(customSpace).toHaveStyleRule('align-items', 'center')
  })
})
