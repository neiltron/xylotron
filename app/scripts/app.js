import React from 'react';
import Home from './components/home';
import injectTapEventsPlugin from 'react-tap-event-plugin';

injectTapEventsPlugin();

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Home/>, mountNode);
