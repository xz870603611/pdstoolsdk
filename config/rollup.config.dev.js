import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2';
module.exports = () => {
    return [
        {
            input: './src/main.ts',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index.js',
                format: 'umd',
            },
            plugins: [
                resolve(),
                commonjs(),
                json(),
                babel(),
                typescript({lib: ["es5", "es6", "dom"], target: "es5"})
            ]
        },
        {
            input: './src/main.ts',
            output: {
                name: 'pdstoolsdk',
                file: './dist/index_iife.js',
                format: 'iife',
            },
            plugins: [
                resolve(),
                commonjs(),
                json(),
                babel(),
                typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
            ]
        }
    ]
};