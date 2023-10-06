import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { light, dark } from '../packages/kit/src/styled/theme/theme';
import * as icons from '../packages/icons/src';
import { ThemeProviderWithBootstrap } from '../packages/kit/src/styled/theme/provider';

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
  themes: { light: { ...light, icons }, dark: { ...dark, icons }, bs4: {...light, name: 'bs'} },
  defaultTheme: 'light',
  Provider: ThemeProviderWithBootstrap
})];

export default preview;
