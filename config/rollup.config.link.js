import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
module.exports = () => {
    return [
        {
            input: './src/index.js',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index.js',
                format: 'umd'
            },
            plugins: [
                commonjs(),
                json()
            ]
        },
        {
            input: './src/index.js',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index_iife.js',
                format: 'iife'
            },
            plugins: [
                commonjs(),
                json()
            ]
        }
    ]
};