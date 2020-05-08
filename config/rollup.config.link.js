module.exports = () => {
    return [{
        input: './src/index.js',
        output: {
            name: 'pdstoolsdk',
            file: './dist/index.js',
            format: 'umd'
        }
    },
        {
            input: './src/index.js',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index_iife.js',
                format: 'iife'
            }
        }]
};