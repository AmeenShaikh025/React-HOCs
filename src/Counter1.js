import React, { Component } from 'react'
import HOC from  "./HOC"

export class Counter1 extends Component {

  render() {
    const {count, incrementCount} = this.props;

    return (
      <button onClick={incrementCount}>
        Counter1 Clicked {count} times!
      </button>
    )
  }
}
export default HOC(Counter1)