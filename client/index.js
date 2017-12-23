import React from 'react';
import { render } from 'react-dom';

import Root from 'Components/layouts/Root';
import configureStore from 'Store/configureStore';

import './styles/index.scss';
import './assets';

const store = configureStore();

render(<Root store={store} />, document.querySelector('#app'));
