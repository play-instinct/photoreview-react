export default {
  CONFIG_NAME: 'Default Config',
  ENV: process.env.NODE_ENV,
  APP_ID: 'pxf',
  MAIN_APP_AUTHORITY: 'http://localhost:3000/api/',
  SHOW_REDUX_DEV_TOOLS: false,
  TOKEN_CONTENT_KEY: 'userToken',
  UNAUTHORIZED_ENDPOINT: '/login',
  FORBIDDEN_ENDPOINT: '/no-access',
  NOT_FOUND_ENDPOINT: '/not-found',
  SERVER_ERROR_ENDPOINT: '/server-error',
};
