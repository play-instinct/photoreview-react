import * as actionTypes from '../actions/';

const initialState = {
    reviews: [],
    currentReview: null
}



export default function review(state = initialState, action) {
    switch (action.type) {
      case actionTypes.FETCH_REVIEWS_REQUEST_SUCCESS : {
        return {
          ...state,
          reviews: action.response
        };
      }

    case actionTypes.FETCH_REVIEW_REQUEST_SUCCESS: {
        return {
          ...state,
          currentReview: action.response

        };
      }
      default: {
        return state;
      }
    }
  }