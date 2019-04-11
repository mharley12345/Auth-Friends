import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit, deleter } from '../actions';
import './styles.scss';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    edit = e => {
        e.preventDefault();
        this.props.edit(this.state.newFriend, this.props.friend.id)
        this.setState({
            editing: false,
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    delete = e => {
        e.persist();
        this.props.deleter(this.props.friend.id)
    }

    render() {
        return (
            <div className='friend'>
                <button
                    onClick={() => this.setState({
                        ...this.state,
                        editing: true
                    })}
                    style={{
                        display: this.state.editing ?
                            'none' :
                            'block'
                    }}
                >Edit Friend</button>
                <form
                    onSubmit={this.state.editing ?
                        this.edit :
                        this.delete}

                >
                    <p
                        className='name'
                        style={{
                            fontSize: this.state.editing ?
                                'inherit' :
                                '25px'
                        }}
                    >{
                            this.state.editing ?
                                <>
                                    <label>Name: </label>
                                    <input
                                        onChange={this.handleChanges}
                                        name='name'
                                        value={this.state.newFriend.name}
                                        type='text'
                                    />
                                </>
                                :
                                ` ${this.props.friend.name}`}
                    </p>

                    <p>
                        Age:
                    {
                            this.state.editing ?

                                <input
                                    onChange={this.handleChanges}
                                    name='age'
                                    value={this.state.newFriend.age}
                                    type='number'
                                />
                                :
                                ` ${this.props.friend.age}`}
                    </p>

                    <p>
                        Email:
                    {
                            this.state.editing ?

                                <input
                                    onChange={this.handleChanges}
                                    name='email'
                                    value={this.state.newFriend.email}
                                    type='email'
                                />
                                :
                                ` ${this.props.friend.email}`}
                    </p>
                    <button
                        style={{
                            display: this.state.editing ?
                                'block' :
                                'none'
                        }}
                        onClick={this.edit}
                    >Submit</button>
                </form>
                <button
                    onClick={
                        this.state.editing ?
                            () => this.setState({
                                editing: false
                            }) :
                            this.delete
                    }>{
                        this.state.editing ?
                            'Cancel' :
                            'Delete Friend'
                    }</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { edit, deleter })(Friend)
