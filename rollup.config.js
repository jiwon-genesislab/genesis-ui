import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import external from 'rollup-plugin-peer-deps-external'
// import json from 'rollup-plugin-json';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@material-ui/core': '@material-ui/core'
};

const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  configFile: './babel.config.js',
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    'prop-types': [
      'elementType',
      'bool',
      'func',
      'object',
      'oneOfType',
      'element',
    ],
    'react-is': [
      'ForwardRef',
      'isFragment',
      'isLazy',
      'isMemo',
      'isValidElementType',
    ],
  },
};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    // globals
  },
  external: Object.keys(globals),
  plugins: [
    // external(),
    resolve(),
    // babel({
    //   // presets: ['@babel/preset-react'],
    //   runtimeHelpers: true,
    //   exclude: 'node_modules/**'
    // }),
    babel(babelOptions),
    commonjs(commonjsOptions),
    // json(),
  ]
};