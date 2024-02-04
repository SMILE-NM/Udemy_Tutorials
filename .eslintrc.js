module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars': [
      'warn'
    ],
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': true,
      'variables': true,
    }],
    'max-len': [
      'error',
      {
        'code': 80, // Устанавливаем максимальную длину строки
        'tabWidth': 2, // Указываем ширину табуляции, если используете табы
        'ignoreUrls': true,
        'ignoreComments': false,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ]
  }


};
