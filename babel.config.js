module.exports = {
  presets: [['@babel/env', { modules: false }], '@babel/preset-typescript', '@babel/preset-react'],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    development: {
      plugins: [
        [
          'babel-plugin-styled-components',
          { displayName: true, namespace: process.env.MICROFRONTEND_NAME },
        ],
      ],
    },
    production: {
      plugins: [
        'date-fns',
        'lodash',
        [
          'babel-plugin-styled-components',
          { displayName: false, fileName: false, namespace: process.env.MICROFRONTEND_NAME },
        ],
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
        ['react-remove-properties', { properties: ['data-test'] }],
      ],
    },
    test: {
      presets: ['@babel/env', '@babel/preset-typescript', '@babel/preset-react'],
      plugins: [['babel-plugin-styled-components', { displayName: true, fileName: true }]],
    },
  },
};
