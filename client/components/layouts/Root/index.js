import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Quiz from 'Components/components/Quiz';
import Footer from 'Components/structures/Footer';
import Main from '../Main';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/categorie/:categoryName" component={Quiz} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]).isRequired
};
