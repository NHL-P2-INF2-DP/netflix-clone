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
  },
  {
    rules: {
      'no-console': ['warn'],
      '@tanstack/query/exhaustive-deps': ['error'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
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
