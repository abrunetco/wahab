// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
// import lodash from '../packages/kit/src/lodash'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      fs: require.resolve('rollup-plugin-node-builtins'),
      // "_": lodash
    },
  },
})
