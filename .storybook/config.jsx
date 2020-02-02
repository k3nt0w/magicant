import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withOptions } from '@storybook/addon-options'
// import { withInfo } from '@storybook/addon-info'
import { version } from '../package.json'
const req = require.context('../src', true, /\.stories\.tsx?$/)

addDecorator(
  withOptions({
    name: `v${version}`,
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false
  })
)

// Informations for kind of tables.
// addDecorator(
//   withInfo({
//     inline: true,
//     header: false,
//     source: true,
//     maxPropsIntoLine: 1
//   })
// )

// Styling storybook itself
const storyWrapper = story => <div style={{ margin: 10 }}>{story()}</div>
addDecorator(storyWrapper)
addDecorator(withKnobs)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
