import React, { useState } from "react";

function UpdatedComp(OriginalComp) {
    function NewComp() {
        const [count, setCount] = useState(0)  
        const incrementCount = () => {
            setCount(count+1)
        }
        return <OriginalComp incrementCount={incrementCount} count={count} />
    }
    return NewComp
}

export default UpdatedComp;