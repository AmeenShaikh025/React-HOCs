import React from 'react'
import UpdatedComp from "./HOCfn"

function Counterfun1({incrementCount, count}) {

  return (
    <button onClick={incrementCount}>
        CounterFN1 Clicked {count} times!
    </button>
  )
}

export default UpdatedComp(Counterfun1)