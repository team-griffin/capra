import babel from 'rollup-plugin-babel';
import memory from 'rollup-plugin-memory';

export default {
    input: 'entry.js',
    output: [
    {
      file: 'dist/es/capra.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/capra.js',
      format: 'cjs',
    },
  ],
  plugins: [
    memory({
      path: 'entry.js',
      contents: `
// @flow
if (process.env.NODE_ENV === 'production') {
module.exports = require('./capra.production.js');
} else {
module.exports = require('./capra.development.js');
}`,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
