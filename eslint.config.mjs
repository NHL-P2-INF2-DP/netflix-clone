import antfu from '@antfu/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default antfu(
  {
    type: 'app',
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: 'single',
    },
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    extends: ['next/core-web-vitals', 'next/typescript'],
  },
  {
    rules: {
      'no-console': ['warn'],
      '@tanstack/query/exhaustive-deps': ['error'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
      'unused-imports/no-unused-vars': ['off'],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['@/**'],
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['README.md', '.*classes.*'],
        },
      ],
    },
  },
);
