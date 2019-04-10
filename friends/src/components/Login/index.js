import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions'
import './login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        e.preventDefault();
        const creds = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(creds);
        this.setState({
            username: '',
            password: ''
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>Username: </label>
                    <input
                        value={this.state.username}
                        name='username'
                        onChange={this.handleChanges}
                    />
                    <label>Password: </label>
                    <input
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChanges}
                        type='current-password'
                    />
                    <button onSubmit={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn,
        error: state.error,
    }
}

export default connect(mapStateToProps, { login })(Login)
