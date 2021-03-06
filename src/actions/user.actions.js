import appConfig from '../config/appConfig';
import { push } from 'react-router-redux';

export const FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED = 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED';
export const FETCH_USER_BASIC_INFO_REQUEST_SUCCESS = 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS';
export const FETCH_USER_BASIC_INFO_REQUEST_FAILURE = 'FETCH_USER_BASIC_INFO_REQUEST_FAILURE';

export const FETCH_USERS_REQUEST_TRIGGERED = 'FETCH_USERS_REQUEST_TRIGGERED';
export const FETCH_USERS_REQUEST_SUCCESS = 'FETCH_USERS_REQUEST_SUCCESS';
export const FETCH_USERS_REQUEST_FAILURE = 'FETCH_USERS_REQUEST_FAILURE';



export function fetchUserBasicInfo() {
    const promise = fetch(`${appConfig.BASIC_INFO_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED,
        onSuccess: FETCH_USER_BASIC_INFO_REQUEST_SUCCESS,
        onFailure: FETCH_USER_BASIC_INFO_REQUEST_FAILURE,
        promise,
    };
}


export function fetchUser() {
    const promise = fetch(`${appConfig.BASIC_INFO_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED,
        onSuccess: FETCH_USER_BASIC_INFO_REQUEST_SUCCESS,
        onFailure: FETCH_USER_BASIC_INFO_REQUEST_FAILURE,
        promise,
    };
}


// export function fetchAuth0(){
//     const promise = fetch(`${appConfig.LOGIN_ENDPOINT}`, {
       
//     });
//     return {
//         onRequest: FETCH_USERS_REQUEST_TRIGGERED,
//         onSuccess: FETCH_USERS_REQUEST_SUCCESS,
//         onFailure: FETCH_USERS_REQUEST_FAILURE,
//         promise,
//     };

// }

export function fetchUsers(){
    const promise = fetch(`${appConfig.USER_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
    return {
        onRequest: FETCH_USERS_REQUEST_TRIGGERED,
        onSuccess: FETCH_USERS_REQUEST_SUCCESS,
        onFailure: FETCH_USERS_REQUEST_FAILURE,
        promise,
    };

}

export const FETCH_USER_LOGIN_REQUEST_TRIGGERED = 'FETCH_USER_LOGIN_REQUEST_TRIGGERED';
export const FETCH_USER_LOGIN_REQUEST_SUCCESS = 'FETCH_USER_LOGIN_REQUEST_SUCCESS';
export const FETCH_USER_LOGIN_REQUEST_FAILURE = 'FETCH_USER_LOGIN_REQUEST_FAILURE';

const handleLoginResponse = (response, dispatch) => {
  console.log(response);
  sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, response.token);
  dispatch({
      type: FETCH_USER_LOGIN_REQUEST_SUCCESS,
      response,
  });
  dispatch(push('/dashboard'));
};


export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function createUser(body) {
    const promise = fetch(`${appConfig.USER_ENDPOINT}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });
    return {
        onRequest: FETCH_USER_SIGNUP_REQUEST_TRIGGERED,
        onSuccess: handleCreateUserResponse,
        onFailure: FETCH_USER_SIGNUP_REQUEST_FAILURE,
        promise,
    };
  }


const handleCreateUserResponse = (response, dispatch) => {
    dispatch({
        type: CREATE_USER_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/signup/social'));
};
  

export function fetchUserLogin(email, password) {
  const promise = fetch(`${appConfig.LOGIN_ENDPOINT}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password,
      }),
  });
  return {
      onRequest: FETCH_USER_LOGIN_REQUEST_TRIGGERED,
      onSuccess: handleLoginResponse,
      onFailure: FETCH_USER_LOGIN_REQUEST_FAILURE,
      promise,
  };
}
