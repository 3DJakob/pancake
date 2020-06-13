import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'public/assets/js/app.js',
  external: [
    'fs'
  ],
  plugins: [
    json(),
    nodeResolve({ jsnext: true }),
    commonjs()
  ],
  output: {
    format: 'iife',
    sourceMap: true,
    file: 'public/bundle.js'
  }
}
