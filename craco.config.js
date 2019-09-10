module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
          transpileTemplateLiterals: true,
          pure: true
        }
      ]
    ]
  }
}
