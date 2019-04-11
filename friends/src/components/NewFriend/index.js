import React from 'react'

const NewFriend = props => {
    return (
        <form onSubmit={props.newFriend}>
            <input
                name='name'
                value={props.state.newFriend.name}
                onChange={props.handleChanges}
                type='text'
                placeholder='Name'
            />
            <input
                name='age'
                value={props.state.newFriend.age}
                onChange={props.handleChanges}
                type='number'
                placeholder='Age'
            />
            <input
                name='email'
                value={props.state.newFriend.email}
                onChange={props.handleChanges}
                type='text'
                placeholder='E-mail Address'
            />
            <button>Submit</button>
        </form>
    )
}

export default NewFriend
