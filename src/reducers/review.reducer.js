import * as actionTypes from '../actions/';
import moment from 'moment';

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
          currentReview: {
            ...action.response,
            encounterDate: moment(action.response.createdAt).format('MM.YY')
        },
      };
    }
      default: {
        return state;
      }
    }
  }