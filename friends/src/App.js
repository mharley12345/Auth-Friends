import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';


import FormikLogin from './components/LoginForm'

import PrivateRoute from './components/PrivateRoute';


import './App.css';
import FriendsList from './components/FriendsList';

function App() {
    return (
      <Router>
         <div className="App">
            <h1>Let's Be Friends</h1>
          <ul>
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='/protected'>Friends List</Link></li>
          </ul>
           <Switch>
            <PrivateRoute exact path='/protected' component={FriendsList}/>
            <Route path='/login' component={FormikLogin} />
            <Route component={FormikLogin} />
            </Switch>
          </div>
        
      </Router>
  );
}


export default App