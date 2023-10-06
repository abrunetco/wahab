import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    // "../packages/**/*.mdx",
    "../packages/icons/**/*.stories.@(ts|tsx)",
    "../packages/kit/**/*.stories.@(ts|tsx)",
    "../packages/rjsf/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-styling'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./.storybook/vite.config.ts",
      },
    },
  },
  // features: {
  //   storyStoreV7: true
  // },
  docs: {
    autodocs: "tag",
  }
};
export default config;
