import * as actionTypes from '../actions/';

const initialState = {
  isFetchingUserBasicInfo: false,
  isFetchingRide: false, 
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    // Fetch Basic Info about User
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingUserBasicInfo: true,
      };
    }
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS:
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserBasicInfo: initialState.isFetchingUserBasicInfo,
      };
    }


    //fetch ride
    case actionTypes.FETCH_RIDE_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingRide: true,
      };
    }
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS:
    case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingRide: initialState.isFetchingRide,
      };
    }
    default: {
      return state;
    }
  }
}