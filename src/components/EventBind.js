import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     //this comes out to be undefined
    //     // console.log(this);
    // }
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* approach 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* approach 2 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
