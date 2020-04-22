import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Abhishek</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        return (
            // ternary operator
            this.state.isLoggedIn ?
                <div>Welcome Abhishek</div>
                : <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
