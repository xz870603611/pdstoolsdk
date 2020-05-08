// import commonjs from 'rollup-plugin-commonjs';
// import { uglify } from "rollup-plugin-uglify";
module.exports = () => {
    return {
        input: './src/index.js',
        output: {
            name: 'pdstoolsdk',
            file: './dist/index.js',
            format: 'umd'
        },
        // plugins: [
        //     commonjs(),
        //     uglify()
        // ]
    }
};