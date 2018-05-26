import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Change the path to load each routing examples
import App from './examples/redirect';

const app = (
  <Router>
    <App />
  </Router>
);

render(app, document.getElementById('root'));
