import getEnv from './environments';

const  MAIN_APP_AUTHORITY  = getEnv().MAIN_APP_AUTHORITY;

export default {
  // ////////////////////////// API ENDPOINTS ///////////////////////////////

  /**
   * Path used to fetch basic informations about user and log user in
   */
  LOGIN_ENDPOINT: `${MAIN_APP_AUTHORITY}/login`,
  USER_ENDPOINT: `${MAIN_APP_AUTHORITY}/users`,
  DASHBOARD_ENDPOINT: `${MAIN_APP_AUTHORITY}/dashboard`,
  STATUS_ENDPOINT: `${MAIN_APP_AUTHORITY}/status`,
  BASIC_INFO_ENDPOINT: `${MAIN_APP_AUTHORITY}/basic-info`,
 
  /**
   * Path used to fetch photographers
   */
  PHOTOGRAPHERS_ENDPOINT: `${MAIN_APP_AUTHORITY}/photographers`,
  PHOTOGRAPHERS_NAMES_ENDPOINT: `${MAIN_APP_AUTHORITY}/photographers-names`,
  REVIEWS_ENDPOINT: `${MAIN_APP_AUTHORITY}/reviews`,


};
