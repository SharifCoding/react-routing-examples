import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Users = () => <h1>Users</h1>;

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
  </div>
);

// try without exact

export default App;
