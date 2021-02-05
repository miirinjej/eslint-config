const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      generators: false,
      jsx: true,
      objectLiteralDuplicateProperties: false,
    },
    ecmaVersion: 2021,
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  plugins: [
    '@babel',
    'import',
    'promise',
    'unicorn',
  ],
  root: true,
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs'],
    'import/ignore': [
      'node_modules',
      '\\.(scss|css|svg|json)$',
    ],
    'import/core-modules': [
      'laravel-mix',
      'vue',
      'vuetify/es5/util/colors',
      'vuex',
    ],
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.json', '.mjs'],
      },
      node: {
        extensions: ['.js', '.json', '.mjs'],
      },
    },
  },

  // add your custom rules here
  rules: {
    /**
     * Possible errors
     */
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: true,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
      },
    ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /**
     * Best practices
     */
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error', { exceptMethods: [] }],
    complexity: ['error', 10],
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always'],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'off',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error', { allow: [] }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        allow: [],
      },
    ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'globalThis',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'globalThis',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'error',
      {
        terms: ['[FIXME]', '[OPTIMIZE]', '[TODO]'],
        location: 'start',
      },
    ],
    'no-with': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    yoda: 'error',

    /**
     * Strict mode
     */
    strict: ['error', 'never'],

    /**
     * Variables
     */
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
      ...restrictedGlobals,
    ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        caughtErrors: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    /**
     * Stylistic issues
     */
    'array-bracket-newline': ['error', { multiline: true, minItems: null }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: true,
        ignoreGlobals: false,
        allow: [],
      },
    ],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': ['error', 'as-needed'],
    'func-style': 'off',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'id-denylist': 'off',
    'id-length': [
      'error',
      {
        min: 2,
        properties: 'never',
        exceptions: ['i', 'j', 'k', 'm', 'n'],
      },
    ],
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { body: 1, parameters: 1 },
        FunctionExpression: { body: 1, parameters: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild', 'TemplateLiteral *'],
        ignoreComments: false,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
        ignorePattern: 'webpack',
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],
    'max-depth': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,

        // svg element and its attribute (group 1)
        ignorePattern: '(<svg|d=")',
      },
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        capIsNewExceptions: [],
      },
    ],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['&&', '||'],
          ['==', '!=', '===', '!=='],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime.'
          + ' Separately, loops should be avoided in favor of array iterations'
          + ' https://github.com/airbnb/javascript#iterators--nope',
      },
    ],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: false,
        allowFunctionParams: false,
      },
    ],
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: '*', next: ['multiline-const', 'multiline-let'] },
      { blankLine: 'always', prev: ['multiline-const', 'multiline-let'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'expression' },
      { blankLine: 'always', prev: 'expression', next: '*' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'empty' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'throw' },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false, overrides: {} }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['+', '-'],
          markers: ['!', '/', '='],
        },
        block: {
          exceptions: ['*', '+', '-'],
          markers: ['!', ':', '::', '='],
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',

    /**
     * ECMAScript 6
     */
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off', // delegate to eslint-plugin-import
    'no-new-symbol': 'error',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['default', 'then'],
      },
    ],
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],

    /**
     * Import
     */
    // static analysis
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-relative-parent-imports': 'off',

    // helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'off',

    // module systems
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // style guide
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': ['error', { max: 10 }],
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/group-exports': 'error',
    'import/dynamic-import-chunkname': 'off',

    /**
     * Promise
     */
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'error',

    /**
     * Unicorn
     */
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'error',
    'unicorn/import-index': 'error',
    'unicorn/import-style': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'off', // delegate to 'no-nested-ternary' rule
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-reduce': 'off',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-replace-all': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        // `i, j, k` used in for loops
        // `m, n` used in for matrix dimensions
        // do not use these single-letter variable names in other cases
        ignore: ['i', 'j', 'k', 'm', 'n'],
      },
    ],
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',
  },
};
