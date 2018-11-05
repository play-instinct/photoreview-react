import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';


export const REQUEST_TO_CREATE_PHOTOGRAPHER_TRIGGERED = 'REQUEST_TO_CREATE_PHOTOGRAPHER_TRIGGERED';
export const REQUEST_TO_CREATE_PHOTOGRAPHER_SUCCESS = 'REQUEST_TO_CREATE_PHOTOGRAPHER_SUCCESS';
export const REQUEST_TO_CREATE_PHOTOGRAPHER_FAILURE = 'REQUEST_TO_CREATE_PHOTOGRAPHER_FAILURE';


export const FETCH_PHOTOGRAPHERS_REQUEST_TRIGGERED = 'FETCH_PHOTOGRAPHERS_REQUEST_TRIGGERED';
export const FETCH_PHOTOGRAPHERS_REQUEST_SUCCESS = 'FETCH_PHOTOGRAPHERS_REQUEST_SUCCESS';
export const FETCH_PHOTOGRAPHERS_REQUEST_FAILURE = 'FETCH_PHOTOGRAPHERS_REQUEST_FAILURE';



export const FETCH_PHOTOGRAPHER_REQUEST_TRIGGERED = 'FETCH_PHOTOGRAPHER_REQUEST_TRIGGERED';
export const FETCH_PHOTOGRAPHER_REQUEST_SUCCESS = 'FETCH_PHOTOGRAPHER_REQUEST_SUCCESS';
export const FETCH_PHOTOGRAPHER_REQUEST_FAILURE = 'FETCH_PHOTOGRAPHER_REQUEST_FAILURE';

export const FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_TRIGGERED = 'FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_TRIGGERED';
export const FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_SUCCESS = 'FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_SUCCESS';
export const FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_FAILURE = 'FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_FAILURE';

export function createPhotographer(body) {
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    return {
        onRequest: REQUEST_TO_CREATE_PHOTOGRAPHER_TRIGGERED,
        onSuccess: handleCreatePhotographerResponse,
        onFailure: REQUEST_TO_CREATE_PHOTOGRAPHER_FAILURE,
        promise,
    };
  }

  const handleCreatePhotographerResponse = (response, dispatch) => {
    console.log(response);
    dispatch({
        type: REQUEST_TO_CREATE_PHOTOGRAPHER_SUCCESS,
        response,
    });
    dispatch(push(`/review-result/${response._id}`));
};



export function fetchAllPhotographers() {
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY), 
        },
    });
    return {
        onRequest: FETCH_PHOTOGRAPHERS_REQUEST_TRIGGERED,
        onSuccess: FETCH_PHOTOGRAPHERS_REQUEST_SUCCESS,
        onFailure: FETCH_PHOTOGRAPHERS_REQUEST_FAILURE,
        promise,
    };
}


export function fetchAllPhotographerNames() {
    console.log('fetch photographer names');
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_NAMES_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY), 
        },
    });
    return {
        onRequest: FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_TRIGGERED,
        onSuccess: FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_SUCCESS,
        onFailure: FETCH_PHOTOGRAPHERS_SUGGESTIONS_REQUEST_FAILURE,
        promise,
    };
}


export function matchPhotographer(state, value) {
    console.log(state)
    console.log(value)
    return (console.log('this returned'))
}




export function fetchPhotographer(id){
    console.log(appConfig); 
    console.log('fetch photographer triggered');
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_ENDPOINT}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY), 
        },
    });
    return {
        onRequest: FETCH_PHOTOGRAPHER_REQUEST_TRIGGERED,
        onSuccess: FETCH_PHOTOGRAPHER_REQUEST_SUCCESS,
        onFailure: FETCH_PHOTOGRAPHER_REQUEST_FAILURE,
        promise,
    };
}


