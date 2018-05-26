import React from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Users = () => <h1>Users</h1>;

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
  </div>
);

export default App;
