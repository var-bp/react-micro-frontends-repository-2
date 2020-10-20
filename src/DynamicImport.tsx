import React from 'react';

const DynamicImport = (): JSX.Element => {
  return (
    <div>
      <h1>{process.env.MICROFRONTEND_NAME}</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
};

export default DynamicImport;
