// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { match } from 'react-router';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import { History } from 'history';
import App from './App';
import GlobalStyle from './global-style';

// https://webpack.js.org/configuration/output/#outputpublicpath
__webpack_public_path__ = `${window[`hostOf${process.env.MICROFRONTEND_NAME}`]}/`;

window[`render${process.env.MICROFRONTEND_NAME}`] = (
  containerId: string,
  history: History,
  parentRouteMatch: match,
) => {
  ReactDOM.render(
    <StrictMode>
      <>
        <GlobalStyle />
        {history ? (
          <Router history={history}>
            <Route path={parentRouteMatch.path}>
              <App />
            </Route>
          </Router>
        ) : (
          <BrowserRouter>
            <Route path="/repository-1">
              <App />
            </Route>
          </BrowserRouter>
        )}
      </>
    </StrictMode>,
    document.querySelector(`#${containerId}`),
  );
};

window[`unmount${process.env.MICROFRONTEND_NAME}`] = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(document.querySelector(`#${containerId}`));
};
