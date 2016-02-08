import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import store from './store';
import injectTapEventsPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

injectTapEventsPlugin();

window.React = React;
const mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  mountNode
);

