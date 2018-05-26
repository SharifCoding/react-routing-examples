import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Users = () => <h1>Users</h1>;

const RedirectToHome = () => <Redirect to="/" />; // change to users?

const App = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/other">Other</Link>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route component={RedirectToHome} />
    </Switch>
  </div>
);

export default App;
