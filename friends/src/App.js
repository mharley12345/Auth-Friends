import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login'
import Friend from './components/Friend'
import { fetch } from './actions'
import './App.scss';

class App extends Component {
  render() {
    console.log('App', this.props)
    return (
      <div className="App">
        <header>
          <h1>Friends</h1>
        </header>
        {!this.props.loggedIn ?
          <Login /> :

          !this.props.fetched ?
            'Fetching...' && this.props.fetch() :
            this.props.friends.map((friend, id) => (
              <Friend friend={friend} key={id} />
            ))
        }
        <h2>{this.props.loggedIn && `Welcome, `}</h2>
        <footer>
          <h6>Created by William C Umstead Jr</h6>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetched: state.fetched,
    friends: state.friends,
    error: state.error,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { fetch })(App);
