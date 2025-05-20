import css from '@eslint/css'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import * as importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', '**/*.d.ts'] },

  // Конфигурация для TypeScript файлов
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
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
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...tseslint.configs.recommended[1].rules,

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // ✅ Переопределяем ненужные правила для TS
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      'css/no-duplicate-imports': 'error',

      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',

      // ✅ Новый порядок через simple-import-sort
      'import/order': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Сайд-эффекты (включая CSS)
            ['^\\u0000'],
            // Внешние библиотеки
            ['^@?\\w'],
            // Абсолютные пути
            ['^[^.]'],
            // Относительные пути
            ['^\\.'],
            // CSS в самом низу
            ['\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },

  // Конфигурация для JS файлов
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
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      'css/no-duplicate-imports': 'error',

      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',

      // Порядок импортов — simple-import-sort
      'import/order': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [['^\\u0000'], ['^@?\\w'], ['^[^.]'], ['^\\.'], ['\\.css$']],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },

  // Prettier
  prettier,
)
