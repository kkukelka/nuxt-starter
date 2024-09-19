import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier'

export default withNuxt(
  {
    files: ['**/*.{js,ts,vue,json}'],
    plugins: [prettier],
    parserOptions: {
      ecmaVersion: 2023,
    },
  }
)
