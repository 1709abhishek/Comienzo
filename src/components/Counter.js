import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Callback value', this.state.count) })
        // console.log(this.state.count)

        //second parameter is props....
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        // react may group them into one single call for better performance
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
