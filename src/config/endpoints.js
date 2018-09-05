import getEnv from './environments';

const  MAIN_APP_AUTHORITY  = getEnv().MAIN_APP_AUTHORITY;

export default {
  // ////////////////////////// API ENDPOINTS ///////////////////////////////

  /**
   * Path used to fetch basic informations about user and log user in
   */
  LOGIN_ENDPOINT: `${MAIN_APP_AUTHORITY}/login`,
  USER_ENDPOINT: `${MAIN_APP_AUTHORITY}/users`,
  /**
   * Path used to fetch rides
   */
  PHOTOGRAPHERS_ENDPOINT: `${MAIN_APP_AUTHORITY}/photographers`,


};
