import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.jsx'],
  addons: ['@storybook/addon-docs', import.meta.resolve('./local-preset.ts')],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
