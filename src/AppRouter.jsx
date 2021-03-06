import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './layouts/main/Main.layout';
import GlobalLoader from './containers/global-loader/GlobalLoader.container';
import Login from './containers/login/Login.container';
import SignUp from './containers/signup/Signup.container';
import SignUpSocial from './containers/signup/SignupSocial.container';
import Dashboard from './containers/dashboard/dashboard.container';
import LandingPage from './containers/landing-page/LandingPage.container';
import Status from './containers/status/Status.container';
import About from './containers/about/about.container';
import Terms from './containers/terms/terms.container';
import Review from './containers/review/review.container';
import Photographer from './containers/photographer/photographer.container';
import PhotographerSearch from './containers/photographer-search/photographer-search.container';
import PrivateRoute from './components/PrivateRoute.component';
import ReviewResult from './containers/review/review-result.container';

const AppRouter = () => (
  <React.Fragment>
    <Switch>
      <GlobalLoader>
        <Main>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/status" component={ Status } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/signup/social" component={ SignUpSocial } />
          <PrivateRoute path="/dashboard" component={ Dashboard } />
          <Route exact path="/review" component={ Review } />
          <Route exact path="/terms" component={ Terms } />
          <PrivateRoute exact path="/review-result/:id" component={ ReviewResult } />
          <PrivateRoute exact path="/photographer-search" component={ PhotographerSearch } />
          <PrivateRoute exact path="/photographer/:id" component={ Photographer} />
          {/* <PrivateRoute exact path="/dashboard" component={ Dashboard } /> */}
        </Main>
      </GlobalLoader>
    </Switch>
  </React.Fragment>
);

export default AppRouter;
