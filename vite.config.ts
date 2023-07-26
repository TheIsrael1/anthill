import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const mainConfig = {
    plugins:  [react(), tsconfigPaths({ loose: true }), svgr(), imagetools()],
    define: {
      'process.env': process.env,
    },
  };

  return env.VITE_USE_PROXY === 'true' ?
  {
    ...mainConfig,
    server: {
      proxy: {
        '/api': {
          target: env?.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    },
  }:
  mainConfig
})
