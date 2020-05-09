import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import {uglify} from "rollup-plugin-uglify";
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
                uglify()
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
                uglify()
            ]
        }
    ]
};