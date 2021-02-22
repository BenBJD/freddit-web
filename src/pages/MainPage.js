import React, { useState } from "react"

export default (props) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Hello and welcome to {props.subfreddit}</h1>
            <h1>You have clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Press Me</button>
        </div>
    )
}