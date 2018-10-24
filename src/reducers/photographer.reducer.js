import * as actionTypes from '../actions/';
import moment from 'moment';
const initialState = {
    photographers: [],
    names: [],
    currentPhotographer: null,
    reviews: []
}



export default function photographer(state = initialState, action) {
    switch (action.type) {
      // Fetch All Photographers
      case actionTypes.FETCH_PHOTOGRAPHERS_REQUEST_SUCCESS : {
        return {
          ...state,
          photographers: action.response.photographers
        };
      }


      case actionTypes.FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_SUCCESS : {
        return {
          ...state,
          photographers: action.response,
          names: action.response.map(item => item.name)
        };
      }

    case actionTypes.FETCH_PHOTOGRAPHER_REQUEST_SUCCESS: {
        return {
          ...state,
          currentPhotographer: { 
            ...action.response,
            createdAt: moment(action.response.createdAt).format('MM.YY')
          },
          reviews: action.response.reviews
        };
      }
      default: {
        return state;
      }
    }
  }