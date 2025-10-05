import type { Config } from 'prettier'

const config: Config = {
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: { proseWrap: 'preserve' },
    },
  ],
  endOfLine: 'crlf',
}

export default config
