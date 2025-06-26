import tailwindcssPlugin from '@tailwindcss/vite';
import viteReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import viteConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    reportCompressedSize: false,
    commonjsOptions: { transformMixedEsModules: true },
  },
  server: {port: 3000},
  plugins: [
    tailwindcssPlugin(),
    viteConfigPaths(),
    viteReactPlugin(),
    process.env.INLINE ? viteSingleFile() : null,
  ].filter(Boolean),
});
