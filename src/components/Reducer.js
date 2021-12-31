import React, { useReducer, useState } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return state + action.payload
        case 'decrement':
            return state - action.payload
        default:
            throw new Error()
    }
}

const Reducer = () => {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={() => setCount({type : 'increment', payload : 2})}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount({type : 'decrement', payload : 2})}>-</button>
        </div>
    )
}

export default Reducer
