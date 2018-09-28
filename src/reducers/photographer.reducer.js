import * as actionTypes from '../actions/';

const initialState = {
    photographers: [],
    currentPhotographer: null
}



export default function photographer(state = initialState, action) {
    switch (action.type) {
      // Fetch All Photographers
      case actionTypes.FETCH_PHOTOGRAPHERS_REQUEST_SUCCESS : {
        return {
          ...state,
          photographers: action.response.photographerss
        };
      }

    case actionTypes.FETCH_PHOTOGRAPHER_REQUEST_SUCCESS: {
        return {
          ...state,
          currentPhotographer: action.response

        };
      }
      default: {
        return state;
      }
    }
  }