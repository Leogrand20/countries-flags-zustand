import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import copy from 'vite-plugin-cp'
import { createHtmlPlugin } from 'vite-plugin-html'
import Inspect from 'vite-plugin-inspect'
import legacy from 'vite-plugin-legacy-swc'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

const chunkSize = 1024

const copyTarget = {
  targets: [{ src: './src/assets/video', dest: 'dist/assets/video' }],
}

const alias = {
  '@': resolve(__dirname, 'src'),
  '@public': resolve(__dirname, 'public'),
  '@css': resolve(__dirname, 'src/app/styles'),
  '@icons': resolve(__dirname, 'src/shared/assets/icons'),
  '@img': resolve(__dirname, 'src/shared/assets/img'),
  '@fonts': resolve(__dirname, 'src/shared/assets/fonts'),
}

const extensions = ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      optimizeDeps: {
        exclude: ['vite-sample'],
        esbuildOptions: {
          jsx: 'automatic',
        },
      },

      build: {
        chunkSizeWarningLimit: chunkSize,

        manifest: true,
      },

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `$injectedColor: orange;`,

            api: 'modern-compiler',
          },
        },
      },

      preview: {
        port: 4000,
      },

      plugins: [
        tsconfigPaths(),
        copy(copyTarget),

        legacy({
          targets: ['>0.3%', 'defaults', 'last 100 versions', 'not dead'],
        }),

        createHtmlPlugin({
          minify: true,
        }),

        react(),

        svgr({
          svgrOptions: {
            exportType: 'named',
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: '**/*.svg',
        }),
      ],

      resolve: {
        alias,
        extensions,
      },
    }
  } else {
    return {
      optimizeDeps: {
        exclude: ['vite-sample'],
        esbuildOptions: {
          jsx: 'automatic',
        },
      },

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `$injectedColor: orange;`,

            api: 'modern-compiler',
          },
        },

        devSourcemap: true,
      },

      server: {
        port: 8000,
        open: true,
      },

      build: {
        sourcemap: 'inline',

        minify: false,

        write: false,

        chunkSizeWarningLimit: chunkSize,

        watch: {},
      },

      plugins: [
        Inspect(),
        tsconfigPaths(),
        copy(copyTarget),
        react(),
        svgr({
          svgrOptions: {
            exportType: 'named',
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: '**/*.svg',
        }),
      ],

      resolve: {
        alias,
        extensions,
      },
    }
  }
})
