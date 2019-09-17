import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList'

import PrivateRoute from './components/PrivateRoute';


import './App.css';

function App() {
    return (
      <Router>
        <>
          <ul>
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='/protected'>Friends List</Link></li>
          </ul>
          <div className="App">
            <h1>Let's Be Friends</h1>
            <Switch>
            <PrivateRoute exact path='/protected' component={FriendsList}/>
            <Route path='/login' component={Login} />
            <Route component={Login} />
            </Switch>
          </div>
        </>
      </Router>
  );
}


export default App;