// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'universe/native',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['/dist/*', 'node_modules'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error'
  }
}
