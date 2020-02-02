const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              'react-app',
              {
                flow: false,
                typescript: true
              }
            ]
          ]
        }
      },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ],
    resolve: {
      alias: {
        src: path.join(__dirname, '..', 'src')
      }
    }
  })

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
