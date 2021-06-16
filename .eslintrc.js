module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'typeorm/browser',
            message: "Use `import {} from 'typeorm'` instead.",
          },
          {
            name: 'uuid',
            importNames: ['v3'],
            message: "Use `import { v5 } from 'uuid'` instead.",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      extends: ['eslint:recommended'],
      files: ['*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
      },
    },
  ],
};
