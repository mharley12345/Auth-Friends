import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login'
import Friend from './components/Friend'
import { fetch, newFriend, logout } from './actions'
import './App.scss';
import NewFriend from './components/NewFriend';

class App extends Component {
  state = {
    newFriend: {
      name: '',
      age: '',
      email: ''
    },
    adding: false
  }

  newFriend = e => {
    e.persist();
    this.props.newFriend(this.state.newFriend);
    this.setState({
      adding: false,
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    });
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    if (this.props.loggedIn) {
      this.props.fetch()
    }
    return (
      <div className="App">
        <div
          className='float'
          style={{
            display: this.props.loggedIn ?
              'block' :
              'none'
          }}
        >
          <button
            onClick={() => {
              this.setState({
                adding: true
              })

            }}
          >New Friend?</button>
          <button
            onClick={() => {
              this.props.logout();
              localStorage.clear();
            }}
          >Log Out?</button>
        </div>
        <header>
          <h1>Friends</h1>
        </header>
        <div className='friends'>
          {!this.props.loggedIn ?
            <Login /> :

            this.state.adding ?
              <NewFriend
                newFriend={this.newFriend}
                handleChanges={this.handleChanges}
                state={this.state}
              />
              :
              this.props.friends.map((friend, id) => (
                <Friend friend={friend} key={id} />
              ))
          }
        </div>
        <h2>{this.props.loggedIn &&
          `Welcome, ${JSON.parse(localStorage.getItem('user')).username}`}</h2>
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

export default connect(mapStateToProps, { fetch, newFriend, logout })(App);
