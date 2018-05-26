import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Users = () => <h1>Users</h1>;

const NotFound = () => <h1>Not Found</h1>;

const App = () => (
  <div>
    <Route path="/users" component={Users} />
    <Route path="/:id" component={Home} />
    <Route component={NotFound} />
  </div>
);

export default App;
