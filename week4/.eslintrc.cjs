module.exports = {
  languageOptions: {
    globals: {
      browser: true,
      node: true,
      es2020: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-duplicate-imports': 'error', //중복 Import X
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // 콘솔 확인 뒤 삭제
    'no-unused-vars': 'error', //사용하지 않은 변수면 없애기
    'no-multiple-empty-lines': 'error', //공백 금지
    'no-undef': 'error', //정의 안 한 변수 사용 x
    indent: ['error', 2], //들여쓰기 2칸!
    'no-trailing-spaces': 'error', // 쓸데없는 공백 없애기
  },
}
