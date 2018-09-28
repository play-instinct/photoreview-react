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
    dispatch({
        type: REQUEST_TO_CREATE_PHOTOGRAPHER_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
};



export function fetchAllPhotographers() {
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_ENDPOINT}`);
    return {
        onRequest: FETCH_PHOTOGRAPHER_REQUEST_TRIGGERED,
        onSuccess: FETCH_PHOTOGRAPHER_REQUEST_SUCCESS,
        onFailure: FETCH_PHOTOGRAPHER_REQUEST_FAILURE,
        promise,
    };
}

export function fetchPhotogapher(id){ 
    const promise = fetch(`${appConfig.RIDES_ENDPOINT}/${id}`)
    return {
        onRequest: FETCH_PHOTOGRAPHER_REQUEST_TRIGGERED,
        onSuccess: FETCH_PHOTOGRAPHER_REQUEST_SUCCESS,
        onFailure: FETCH_PHOTOGRAPHER_REQUEST_FAILURE,
        promise,
    };
}