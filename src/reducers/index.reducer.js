import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import appState from './appState.reducer';
import user from './user.reducer';
import ride from './ride.reducer';


const mainReducer = combineReducers({
  appState,
  user,
  ride,
  routing: routerReducer,
  form: reduxFormReducer,
});
 
export default mainReducer;