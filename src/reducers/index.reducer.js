import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import appState from './appState.reducer';
import user from './user.reducer';
import review from './review.reducer';
import photographer from './photographer.reducer';
import ride from './ride.reducer';



const mainReducer = combineReducers({
  appState,
  user,
  ride,
  review,
  photographer,
  routing: routerReducer,
  form: reduxFormReducer,
});
 
export default mainReducer;