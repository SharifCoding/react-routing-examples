import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Details = ({ location }) => (
  <div>
    <h1>Details</h1>
    <ul>
      <li>{location.pathname}</li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/details" component={Details} />
  </div>
);

export default App;
