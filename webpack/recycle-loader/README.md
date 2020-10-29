# recycle-loader

A simple webpack loader that checks if a module is available on the global (window) scope, and if so, uses it instead of the input.

Very useful for micro-frontends when chained with [expose-loader](https://webpack.js.org/loaders/expose-loader/), as it can enable a microfrontend application to run both independently and under a parent application without duplicating these modules. ex:


```js
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve('some-module'),
        use: [
          { loader: 'recycle-loader', options: { globalName: 'SomeModule' } },
          { loader: 'expose-loader', options: { exposes: 'SomeModule' } },
        ]
      }
    ]
  }
}
