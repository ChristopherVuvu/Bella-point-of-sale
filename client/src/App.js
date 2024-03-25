// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Sales from './components/Sales';
import Products from './components/Products';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/sales">
            {loggedIn ? <Sales /> : <Redirect to="/login" />}
          </Route>
          <Route path="/products">
            {loggedIn ? <Products /> : <Redirect to="/login" />}
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

