const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')
const tsconfigPaths = require('vite-tsconfig-paths')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    }
  },
  // async viteFinal(config, { configType }) {
  //   const { config: userConfig } = await loadConfigFromFile(
  //     path.resolve(__dirname, '../vite.config.ts')
  //   )
  //   // userConfig.plugins.push(
  //   //   /** @see https://github.com/aleclarson/vite-tsconfig-paths */
  //   //   )

  //   return mergeConfig(config, {
  //     ...userConfig,
  //     // manually specify plugins to avoid conflict
  //     plugins: [
  //       tsconfigPaths({
  //         // My tsconfig.json isn't simply in viteConfig.root,
  //         // so I've passed an explicit path to it:
  //         projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
  //       }),
  //     ],
  //   })
  // },
}
