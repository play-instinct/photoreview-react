import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store/configure-store';
import AppRouter from './AppRouter';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRouter />
    </ConnectedRouter>
  </Provider>
);

const rootEl = document.getElementById('root');

ReactDOM.render(
    <App/>
, rootEl);
