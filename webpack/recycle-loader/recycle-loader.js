/* eslint-disable @typescript-eslint/no-var-requires */
const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    globalName: {
      type: 'string',
    },
  },
};

// eslint-disable-next-line func-names
module.exports = function (source) {
  const options = getOptions(this);
  validate(schema, options, 'Recycle Loader');
  return `
    if (!!window["${options.globalName}"]) {
      module.exports = window["${options.globalName}"];
    } else {
      ${source};
    }
  `;
};
