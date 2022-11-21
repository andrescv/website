/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'consistent',
  semi: true,
  trailingComma: 'all',
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  astroAllowShorthand: false,
  tailwindConfig: './tailwind.config.cjs',
};
