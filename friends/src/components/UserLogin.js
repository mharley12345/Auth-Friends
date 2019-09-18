import React from 'react';
// import LoginForm from './components/LoginForm'
import FriendsList from "./FriendsList"
 // eslint-disable-next-line 
import PrivateRoute from './PrivateRoute'

import {Route, Link, Redirect} from "react-router-dom"


function UserLogin() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );


  return (
    <div className="App">
    <div><Link to="/friends">FriendList</Link></div>
      <header className="App-header">
    <PrivateRoute exact path="/friends" component={FriendsList}/>
       <Route exact path="/" component={UserLogin}/>
      </header>
    </div>
  );
}

export default UserLogin;