import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    // Vendored shadcn/ui source, kept as close to upstream as possible.
    files: ['src/components/ui/**', 'src/hooks/**', 'src/registry/blocks/**'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
  {
    // Vendored Bklit UI chart source (animation-heavy; trips the React Compiler lint rules).
    files: ['src/components/charts/**', 'src/registry/charts/bklit-*'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.source/**',
  ]),
]);

export default eslintConfig;
