import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

module.exports = () => {
    return [
        // {
        //     input: './src/index.js',
        //     output: {
        //         name: 'pdstoolsdk',
        //         file: './dist/index.js',
        //         format: 'umd',
        //         globals: {
        //             UrlPattern: 'url-pattern',
        //         },
        //     },
        //     plugins: [
        //         resolve(),
        //         commonjs(),
        //         json(),
        //         babel({
        //             exclude: 'node_modules/**',
        //             runtimeHelpers: true
        //         })
        //     ]
        // },
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
                json(),
                babel({
                    exclude: 'node_modules/**',
                    runtimeHelpers: true
                })
            ]
        }
    ]
};