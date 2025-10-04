/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: { proseWrap: 'preserve' },
    },
  ],
  endOfLine: 'crlf',
}

export default config
