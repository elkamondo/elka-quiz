import React from 'react';
import { render } from 'react-dom';

import Root from 'Components/layouts/Root';
import configureStore from 'Store/configureStore';

import './styles/index.scss';
import './assets';

const persistedState = localStorage.getItem('quiz-highscores')
  ? Object.assign(
      {},
      { highscores: JSON.parse(localStorage.getItem('quiz-highscores')) }
    )
  : {};

const store = configureStore(persistedState);

render(<Root store={store} />, document.querySelector('#app'));
