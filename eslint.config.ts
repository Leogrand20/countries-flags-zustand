import css from '@eslint/css'
import js from '@eslint/js'
import markdown from '@eslint/markdown'
import prettier from 'eslint-config-prettier'
import * as importPlugin from 'eslint-plugin-import'
import jsonc from 'eslint-plugin-jsonc'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import jsoncParser from 'jsonc-eslint-parser'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      'dist',
      'build',
      'node_modules',
      '**/*.d.ts',
      '*.log',
      '.env',
      '.env.*',
      '__snapshots__/',
      'public',
      '.husky',
      '.DS_Store',
    ],
  },

  // === TypeScript-файлы ===
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        jsxImportSource: 'react',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      css,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'simple-import-sort': pluginImportSort,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.eslint.json',
        },
      },
    },
    rules: {
      ...(js.configs.recommended?.rules || {}),
      ...(tseslint.configs.recommended?.[0]?.rules || {}),
      ...(tseslint.configs.recommended?.[1]?.rules || {}),

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      // ✅ новое правило — требуем import type для типов
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      ...(react.configs.recommended?.rules || {}),
      ...(reactHooks.configs.recommended?.rules || {}),

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      'css/no-duplicate-imports': 'error',

      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',

      'import/order': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^react-dom', '^@?\\w'],
            [
              '^@app',
              '^@shared',
              '^@entities',
              '^@features',
              '^@components',
              '^@widgets',
              '^@layouts',
              '^@pages',
              '^@hooks',
              '^@utils',
              '^@store',
            ],
            ['^[^.]'],
            ['^\\.'],
            ['^.+\\.(css|scss|sass|less)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },

  // === JavaScript-файлы ===
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxImportSource: 'react',
      },
    },
    plugins: {
      css,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'simple-import-sort': pluginImportSort,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...(js.configs.recommended?.rules || {}),
      ...(react.configs.recommended?.rules || {}),
      ...(reactHooks.configs.recommended?.rules || {}),

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      'css/no-duplicate-imports': 'error',

      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',

      'import/order': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^react-dom', '^@?\\w'],
            [
              '^@app',
              '^@shared',
              '^@entities',
              '^@features',
              '^@components',
              '^@widgets',
              '^@layouts',
              '^@pages',
              '^@hooks',
              '^@utils',
              '^@store',
            ],
            ['^[^.]'],
            ['^\\.'],
            ['^.+\\.(css|scss|sass|less)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },

  // === JSON / JSONC ===
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: { jsonc },
    rules: {
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/quote-props': ['error', 'always'],
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'jsonc/no-octal-escape': 'error',
    },
  },

  // === Markdown ===
  {
    files: ['**/*.md'],
    plugins: { markdown },
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/*.{js,jsx}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.md/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },

  prettier,
]
