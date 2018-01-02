import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Quiz from 'Components/components/Quiz';
import Main from '../Main';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/categorie/:categoryName" component={Quiz} />
        </Switch>
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
