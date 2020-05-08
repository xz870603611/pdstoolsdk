module.exports = () => {
  return {
      input: './src/index.js',
      output: {
          name: 'pdstoolsdk',
          file: './dist/index.js',
          format: 'cjs'
      }
  }
};