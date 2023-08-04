import React, { Component } from 'react'
import HOC from  "./HOC"

export class Counter2 extends Component {
    
  render() {
    const {count, incrementCount} = this.props;

    return (
      <button onClick={incrementCount}>
        Counter2 Clickd {count} times!
      </button>
    )
  }
}
export default HOC(Counter2)