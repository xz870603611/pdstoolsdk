import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import {terser} from 'rollup-plugin-terser';
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
                terser()
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
                json(),
                terser()
            ]
        }
    ]
};