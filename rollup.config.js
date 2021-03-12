import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  plugins: [resolve(), typescript()],
  external: ['react'],
  treeshake: {
    moduleSideEffects: false,
  },
  output: [
    {
      file: 'dist/coobeet-react-table.js',
      format: 'cjs',
    },
    {
      file: 'dist/coobeet-react-table.esm.js',
      format: 'esm',
    },
  ],
};
