# WAHAB

briliant

## Install
- for core kit package
```
yarn add https://gitpkg.now.sh/abrunetco/wahab/packages/kit
```
- for icons package
```
yarn add https://gitpkg.now.sh/abrunetco/wahab/packages/icons
```
- for RJSF package
```
yarn add https://gitpkg.now.sh/abrunetco/wahab/packages/rjsf
```

## Usage
### import provider in react app
```ts
import { ThemeProvider } from '@wahab/kit/styled/theme/provider'
import * as icons from '@wahab/icons';
import { light, type Theme } from '@wahab/kit/styled/theme/theme';

const myTheme: Theme = {
  ...light,
  icons,
  
  typography: {
    ...light.typography,
    heading1: {
      family: "SuisseIntl",
      size: 4,
      weight: 700,
      lineHeight: 5,
      decor: "upper"
    }
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```
### Use JSON-schema form
```ts
import { Form } from '@wahab/rjsf'
```

### Use JSON-schema Data grid
```ts
import { TableGrid } from '@wahab/rjsf'
```
