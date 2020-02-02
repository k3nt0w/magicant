import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { color, radius, fontsize, shadow, space } from 'src/particles'

export const NAME = 'atoms/Button'
export const variants = [
  'contained',
  'outlined',
  'text',
  'floating',
  'toggle'
] as const
export const sizes = ['large', 'default', 'small'] as const
export const shapes = ['default', 'left', 'middle', 'right'] as const

export type Variant = typeof variants[number]
export type Size = typeof sizes[number]
export type Shape = typeof shapes[number]
export type Divider = boolean
export type Current = boolean

export interface BaseButtonProps {
  variant?: Variant
  size?: Size
  shape?: Shape
  divider?: Divider
  current?: Current
}

const Foundation = () => {
  return css`
    cursor: pointer;
    align-items: center;
    :focus {
      outline: 0;
    }
  `
}

const Variant = ({ variant }: BaseButtonProps) => {
  switch (variant) {
    default:
    case 'contained':
      return css`
        background: ${color.main};
        color: ${color.nega};
        border: 1px solid ${color.main};
        :hover {
          opacity: 0.7;
        }
      `
    case 'outlined':
      return css`
        background: ${color.nega};
        border: 1px solid ${color.main};
        color: ${color.main};
        :hover {
          background: ${color.diluted};
        }
      `
    case 'text':
      return css`
        color: ${color.main};
        background: none;
        border: none;
        outline: none;
        appearance: none;
        :hover {
          background: ${color.diluted};
          border-radius: 4px;
        }
      `
    case 'floating':
      return css`
        color: ${color.main};
        background: ${color.nega};
        border: none;
        box-shadow: ${shadow.default};
        :hover {
          background: ${color.diluted};
          box-shadow: ${shadow.hover};
        }
      `
    case 'toggle':
      return css`
        color: ${color.main};
        border: 1px solid ${color.line};
        :hover {
          background: ${color.diluted};
          border: 1px solid ${color.line};
        }
      `
  }
}

const Size = ({ size }: BaseButtonProps) => {
  if (size === 'default' || typeof size === 'undefined') {
    return css`
      font-size: ${fontsize.m};
      padding: ${space.m} ${space.l} ${space.m} ${space.l};
      font-weight: bold;
      cursor: pointer;
    `
  }
}

const Shape = ({ shape }: BaseButtonProps) => {
  switch (shape) {
    default:
    case 'default':
      return css`
        border-radius: ${radius.m};
      `
    case 'left':
      return css`
        border-radius: ${radius.m} 0 0 ${radius.m};
        box-shadow: none;
      `
    case 'middle':
      return css`
        border-left: none;
        border-radius: none;
        box-shadow: none;
        :hover {
          border-left: none;
        }
      `
    case 'right':
      return css`
        border-left: none;
        border-radius: 0 ${radius.m} ${radius.m} 0;
        box-shadow: none;
        :hover {
          border-left: none;
        }
      `
  }
}

const Divider = ({ divider, shape }: BaseButtonProps) => {
  if (divider) {
    if (shape == 'left') {
      return css`
        position: relative;
        :after {
          position: absolute;
          content: '';
          background: ${color.line};
          top: 25%;
          right: 0;
          height: 50%;
          width: 1px;
        }
      `
    } else if (shape == 'right') {
      return css`
        position: relative;
        :after {
          position: absolute;
          content: '';
          background: ${color.line};
          top: 25%;
          left: 0;
          height: 50%;
          width: 1px;
        }
      `
    }
  }
}

const Current = ({ current }: BaseButtonProps) => {
  if (current) {
    return css`
      background: ${color.main};
      color: ${color.nega};
      border: 1px solid ${color.main};
      border-left: none;
    `
  }
}

export const Button = styled('button', {})<BaseButtonProps>`
  ${Foundation}
  ${Variant}
  ${Size}
  ${Shape}
  ${Divider}
  ${Current}
`
