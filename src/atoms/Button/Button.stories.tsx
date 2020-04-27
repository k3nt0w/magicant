import { storiesOf } from '@storybook/react'
import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { shadow, radius } from 'src/particles'
import { Button, variants, shapes, Variant, Shape, NAME } from './Button'

storiesOf(NAME, module).add('Playground', () => (
  <Button
    variant={select('variant', variants, 'contained')}
    shape={select('shape', shapes, 'default')}
    divider={boolean('divider', false)}
  >
    playground
  </Button>
))

storiesOf(NAME, module).add('Combined', () => (
  <div
    style={{
      display: 'inline-flex',
      boxShadow: `${shadow.default}`,
      borderRadius: `${radius.m}`
    }}
  >
    <Button variant="floating" shape="left" divider>
      left
    </Button>
    <Button variant="floating" shape="middle">
      middle
    </Button>
    <Button variant="floating" shape="right" divider>
      right
    </Button>
  </div>
))

storiesOf(NAME, module).add('Toggle', () => (
  <div
    style={{
      display: 'inline-flex',
      borderRadius: `${radius.m}`
    }}
  >
    <Button variant="toggle" shape="left" current>
      left
    </Button>
    <Button variant="toggle" shape="middle">
      middle
    </Button>
    <Button variant="toggle" shape="right">
      right
    </Button>
  </div>
))
