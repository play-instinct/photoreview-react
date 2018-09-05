import defaultConfig from './default';

export default {
  ...defaultConfig,
  CONFIG_NAME: 'Development Config',
  SHOW_REDUX_DEV_TOOLS: true,
  MAIN_APP_AUTHORITY: 'http://localhost:3000/api', // Without slash - endpoints are prefixed
};
