module.exports = () => {
  return {
      input: './src/index.js',
      output: {
          name: 'pdstoolsdk',
          file: './lib/index.js',
          format: 'cjs'
      }
  }
};