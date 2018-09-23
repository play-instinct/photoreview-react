import appConfig from '../config/appConfig';




// 401 Unauthorized Redirect
export const UNAUTHORIZED_REDIRECT = 'UNAUTHORIZED_REDIRECT';
 
// 403 Forbidden Redirect
export const FORBIDDEN_REDIRECT = 'FORBIDDEN_REDIRECT';
 
// 404 Not Found Redirect
export const NOT_FOUND_REDIRECT = 'NOT_FOUND_REDIRECT';
 
// 404 Not Found Reset
export const NOT_FOUND_RESET = 'NOT_FOUND_RESET';
 
// 5XX Server Error Redirect
export const SERVER_ERROR_REDIRECT = 'SERVER_ERROR_REDIRECT';
 
// Show alert message
export const SHOW_ALERT_MESSAGE = 'SHOW_ALERT_MESSAGE';
 
// Reset alert message
export const RESET_ALERT_MESSAGE = 'RESET_ALERT_MESSAGE';


export const FETCH_STATUS_REQUEST_TRIGGERED = 'FETCH_STATUS_REQUEST_TRIGGERED';
export const FETCH_STATUS_REQUEST_SUCCESS = 'FETCH_STATUS_REQUEST_SUCCESS';
export const FETCH_STATUS_REQUEST_FAILURE = 'FETCH_STATUS_REQUEST_FAILURE';




export function fetchStatus() {
    const promise = fetch(`${appConfig.STATUS_ENDPOINT}`);
    return {
        onRequest: FETCH_STATUS_REQUEST_TRIGGERED,
        onSuccess: FETCH_STATUS_REQUEST_SUCCESS,
        onFailure: FETCH_STATUS_REQUEST_FAILURE,
        promise,
    };
}