import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
module.exports = () => {
    return [
        {
            input: './src/index.js',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index.js',
                format: 'umd',
                globals: {
                    UrlPattern: 'url-pattern',
                },
            },
            plugins: [
                resolve(),
                commonjs(),
                json()
            ]
        },
        {
            input: './src/index.js',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index_iife.js',
                format: 'iife',
                globals: {
                    UrlPattern: 'url-pattern',
                },
            },
            plugins: [
                resolve(),
                commonjs(),
                json()
            ]
        }
    ]
};