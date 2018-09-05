import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';


export const REQUEST_TO_CREATE_RIDE_TRIGGERED = 'REQUEST_TO_CREATE_RIDE_TRIGGERED';
export const REQUEST_TO_CREATE_RIDE_SUCCESS = 'REQUEST_TO_CREATE_RIDE_SUCCESS';
export const REQUEST_TO_CREATE_RIDE_FAILURE = 'REQUEST_TO_CREATE_RIDE_FAILURE';


export const FETCH_RIDES_REQUEST_TRIGGERED = 'FETCH_RIDES_REQUEST_TRIGGERED';
export const FETCH_RIDES_REQUEST_SUCCESS = 'FETCH_RIDES_REQUEST_SUCCESS';
export const FETCH_RIDES_REQUEST_FAILURE = 'FETCH_RIDES_REQUEST_FAILURE';



export const FETCH_RIDE_REQUEST_TRIGGERED = 'FETCH_RIDE_REQUEST_TRIGGERED';
export const FETCH_RIDE_REQUEST_SUCCESS = 'FETCH_RIDE_REQUEST_SUCCESS';
export const FETCH_RIDE_REQUEST_FAILURE = 'FETCH_RIDE_REQUEST_FAILURE';

export function createRide(body) {
    const promise = fetch(`${appConfig.RIDES_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)},
        body: JSON.stringify(body),
    });
    return {
        onRequest: REQUEST_TO_CREATE_RIDE_TRIGGERED,
        onSuccess: handleCreateRideResponse,
        onFailure: REQUEST_TO_CREATE_RIDE_FAILURE,
        promise,
    };
  }


  const handleCreateRideResponse = (response, dispatch) => {
    dispatch({
        type: REQUEST_TO_CREATE_RIDE_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
};


export function fetchAllRides() {
    const promise = fetch(`${appConfig.RIDES_ENDPOINT}`);
    return {
        onRequest: FETCH_RIDES_REQUEST_TRIGGERED,
        onSuccess: FETCH_RIDES_REQUEST_SUCCESS,
        onFailure: FETCH_RIDES_REQUEST_FAILURE,
        promise,
    };
}

export function fetchRide(id){ 
    const promise = fetch(`${appConfig.RIDES_ENDPOINT}/${id}`)
    return {
        onRequest: FETCH_RIDE_REQUEST_TRIGGERED,
        onSuccess: FETCH_RIDE_REQUEST_SUCCESS,
        onFailure: FETCH_RIDE_REQUEST_FAILURE,
        promise,
    };
}