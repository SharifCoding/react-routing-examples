import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Details = ({ match }) => (
  <div>
    <h1>Details</h1>
    <ul>
      <li>{JSON.stringify(match.params)}</li>
      <li>{match.isExact.toString()}</li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/details" component={Details} />
  </div>
);

// add route param to users

export default App;
