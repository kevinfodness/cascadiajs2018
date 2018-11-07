/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const renderApp = () => {
  ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('problem-3-app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/app', renderApp);
}
