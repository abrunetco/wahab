import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { light, dark } from '@xla/wahab/src/styled/theme/theme';
import { ThemeProvider } from '@xla/wahab/src/styled/theme/provider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
  themes: { light, dark, bs4: {...light, name: 'bs'} },
  defaultTheme: 'bs4',
  Provider: ThemeProvider
})];

export default preview;
