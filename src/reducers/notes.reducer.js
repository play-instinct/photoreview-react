import * as actionTypes from '../actions/';
import moment from 'moment';

const initialState = {
    notes: [],
    currentNote: null
}



export default function review(state = initialState, action) {
    switch (action.type) {
      case actionTypes.FETCH_NOTES_REQUEST_SUCCESS : {
        return {
          ...state,
          notes: action.response
        };
      }

    case actionTypes.FETCH_NOTE_REQUEST_SUCCESS: {
        return {
          ...state,
          currentNote: {
            ...action.response
        },
      };
    }
      default: {
        return state;
      }
    }
  }