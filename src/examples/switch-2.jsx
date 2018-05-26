import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Users = () => <h1>Users</h1>;

const NotFound = () => <h1>Not Found</h1>;

const App = () => (
  <Switch>
    <Route path="/users" component={Users} />
    <Route path="/:id" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

// try reordering

export default App;
