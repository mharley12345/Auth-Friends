import React, { Component } from 'react'

export default class Friend extends Component {
    render() {
        return (
            <div>
                {this.props.friend.name}
            </div>
        )
    }
}
