import { defineConfig } from 'vite';
import { resolve } from 'path';
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import makeManifestPlugin from './utils/plugins/make-manifest-plugin';
import { watchPublicPlugin, watchRebuildPlugin } from '@extension/hmr';
import { isDev, isProduction, watchOption } from '@extension/vite-config';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');

const outDir = resolve(rootDir, '..', 'dist');
export default defineConfig({
  resolve: {
    alias: {
      '@root': rootDir,
      '@src': srcDir,
      '@assets': resolve(srcDir, 'assets'),
    },
  },
  plugins: [
    libAssetsPlugin({
      outputPath: outDir,
    }),
    watchPublicPlugin(),
    makeManifestPlugin({ outDir }),
    isDev && watchRebuildPlugin({ reload: true }),
  ],
  publicDir: resolve(rootDir, 'public'),
  build: {
    lib: {
      formats: ['iife'],
      entry: resolve(__dirname, 'src/background/index.ts'),
      name: 'BackgroundScript',
      fileName: 'background',
    },
    outDir,
    emptyOutDir: false,
    sourcemap: isDev,
    minify: isProduction,
    reportCompressedSize: isProduction,
    watch: watchOption,
    rollupOptions: {
      external: ['chrome'],
    },
  },
  envDir: '../',
});
