const { loadConfigFromFile, mergeConfig } = require('vite')
const path = require('path')
const tsconfigPaths = require('vite-tsconfig-paths')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  previewHead: (head) => `
  ${head}

  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  `,
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )

    return mergeConfig(config, {
      ...userConfig,
      plugins: [
        tsconfigPaths.default({
          projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
        }),
      ],
    })
  },
}
