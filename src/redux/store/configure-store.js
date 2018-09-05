import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import apiMiddleware from '../middleware/api-middleware';
import createHistory from 'history/createBrowserHistory';
import appConfig from '../../config/appConfig';
import mainReducer from '../../reducers/index.reducer';
 
 
export const history = createHistory();
 
const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  apiMiddleware,
  routerMiddleware(history),
];
 
if (appConfig.SHOW_REDUX_DEV_TOOLS) {
  const { devToolsExtension } = window;
 
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
 
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);
 
const store = createStore(
  mainReducer,
  initialState,
  composedEnhancers,
);
 
export default store;