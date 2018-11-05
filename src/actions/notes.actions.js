import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';



export const REQUEST_TO_CREATE_NOTE_TRIGGERED = 'REQUEST_TO_CREATE_NOTE_TRIGGERED';
export const REQUEST_TO_CREATE_NOTE_SUCCESS = 'REQUEST_TO_CREATE_NOTE_SUCCESS';
export const REQUEST_TO_CREATE_NOTE_FAILURE = 'REQUEST_TO_CREATE_NOTE_FAILURE';


export const FETCH_NOTE_REQUEST_TRIGGERED = 'FETCH_NOTE_REQUEST_TRIGGERED';
export const FETCH_NOTE_REQUEST_SUCCESS = 'FETCH_NOTE_REQUEST_SUCCESS';
export const FETCH_NOTE_REQUEST_FAILURE = 'FETCH_NOTE_REQUEST_FAILURE';



export const FETCH_NOTES_REQUEST_TRIGGERED = 'FETCH_NOTES_REQUEST_TRIGGERED';
export const FETCH_NOTES_REQUEST_SUCCESS = 'FETCH_NOTES_REQUEST_SUCCESS';
export const FETCH_NOTES_REQUEST_FAILURE = 'FETCH_NOTES_REQUEST_FAILURE';


export function createNote(body) {
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)},
        body: JSON.stringify(body),
        
    });
    return {
        onRequest: REQUEST_TO_CREATE_NOTE_TRIGGERED,
        onSuccess: handleCreateNoteResponse,
        onFailure: REQUEST_TO_CREATE_NOTE_FAILURE,
        promise,
    };
  }

//need to add 'review submitted for approval' message to dashboard top
  const handleCreateNoteResponse = (response, dispatch) => {
    dispatch({
        type: REQUEST_TO_CREATE_NOTE_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
};





export function fetchNote(id){ 
    console.log(appConfig);
    const promise = fetch(`${appConfig.REVIEWS_ENDPOINT}/${id}`, {
        headers: {'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)},
    })
    return {
        onRequest: FETCH_NOTE_REQUEST_TRIGGERED,
        onSuccess: FETCH_NOTE_REQUEST_SUCCESS,
        onFailure: FETCH_NOTE_REQUEST_FAILURE,
        promise,
    };
}