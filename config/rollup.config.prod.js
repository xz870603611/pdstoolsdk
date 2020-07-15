import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel'
module.exports = () => {
    return [
        {
            input: './src/main.ts',
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
                json(),
                terser(),
                babel()
            ]
        },
        {
            input: './src/main.ts',
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
                json(),
                terser(),
                babel()
            ]
        }
    ]
};