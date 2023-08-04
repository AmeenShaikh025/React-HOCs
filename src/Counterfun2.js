import React from 'react'
import UpdatedComp from "./HOCfn"

function Counterfun2({incrementCount, count}) {

  return (
    <button onClick={incrementCount}>
        CounterFN2 Clicked {count} times!
    </button>
  )
}

export default UpdatedComp(Counterfun2)