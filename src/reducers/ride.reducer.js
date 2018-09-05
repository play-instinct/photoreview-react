import * as actionTypes from '../actions/';

const initialState = {
    rides: [],
    currentRide: null
}



export default function ride(state = initialState, action) {
    switch (action.type) {
      // Fetch All Rides
      case actionTypes.FETCH_RIDES_REQUEST_SUCCESS : {
        return {
          ...state,
          rides: action.response.rides
        };
      }

    case actionTypes.FETCH_RIDE_REQUEST_SUCCESS: {
        return {
          ...state,
         currentRide: action.response

        };
      }
      default: {
        return state;
      }
    }
  }