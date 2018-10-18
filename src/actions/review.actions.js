import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';



export const REQUEST_TO_CREATE_REVIEW_TRIGGERED = 'REQUEST_TO_CREATE_REVIEW_TRIGGERED';
export const REQUEST_TO_CREATE_REVIEW_SUCCESS = 'REQUEST_TO_CREATE_REVIEW_SUCCESS';
export const REQUEST_TO_CREATE_REVIEW_FAILURE = 'REQUEST_TO_CREATE_REVIEW_FAILURE';


export const FETCH_REVIEW_REQUEST_TRIGGERED = 'FETCH_REVIEW_REQUEST_TRIGGERED';
export const FETCH_REVIEW_REQUEST_SUCCESS = 'FETCH_REVIEW_REQUEST_SUCCESS';
export const FETCH_REVIEW_REQUEST_FAILURE = 'FETCH_REVIEW_REQUEST_FAILURE';



export const FETCH_REVIEWS_REQUEST_TRIGGERED = 'FETCH_REVIEWS_REQUEST_TRIGGERED';
export const FETCH_REVIEWS_REQUEST_SUCCESS = 'FETCH_REVIEWS_REQUEST_SUCCESS';
export const FETCH_REVIEWS_REQUEST_FAILURE = 'FETCH_REVIEWS_REQUEST_FAILURE';


export function createReview(body) {
    const promise = fetch(`${appConfig.PHOTOGRAPHERS_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)},
        body: JSON.stringify(body),
        
    });
    return {
        onRequest: REQUEST_TO_CREATE_REVIEW_TRIGGERED,
        onSuccess: handleCreateReviewResponse,
        onFailure: REQUEST_TO_CREATE_REVIEW_FAILURE,
        promise,
    };
  }

//need to add 'review submitted for approval' message to dashboard top
  const handleCreateReviewResponse = (response, dispatch) => {
    dispatch({
        type: REQUEST_TO_CREATE_REVIEW_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
};



export function fetchAllReviews() {
    const promise = fetch(`${appConfig.REVIEW_ENDPOINT}`);
    return {
        onRequest: FETCH_REVIEWS_REQUEST_TRIGGERED,
        onSuccess: FETCH_REVIEWS_REQUEST_SUCCESS,
        onFailure: FETCH_REVIEWS_REQUEST_FAILURE,
        promise,
    };
}



// export function ApproveReview() {
//     const promise = fetch(`${appConfig.REVIEW_ENDPOINT/approve-review}`);
//     return {
//         onRequest: FETCH_REVIEWS_REQUEST_TRIGGERED,
//         onSuccess: FETCH_REVIEWS_REQUEST_SUCCESS,
//         onFailure: FETCH_REVIEWS_REQUEST_FAILURE,
//         promise,
//     };
// }

export function fetchReview(id){ 
    console.log(appConfig);
    const promise = fetch(`${appConfig.REVIEWS_ENDPOINT}/${id}`, {
        headers: {'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)},
    })
    return {
        onRequest: FETCH_REVIEW_REQUEST_TRIGGERED,
        onSuccess: FETCH_REVIEW_REQUEST_SUCCESS,
        onFailure: FETCH_REVIEW_REQUEST_FAILURE,
        promise,
    };
}