import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

export default {
    input: 'src/index.js',
    output: [
    {
      file: 'dist/es/capra.development.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/capra.development.js',
      format: 'cjs',
    },
  ],
  plugins: [
    localResolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
};
