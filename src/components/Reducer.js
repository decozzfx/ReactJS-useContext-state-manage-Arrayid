import React, { useReducer, useState } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            throw new Error()
    }
}

const Reducer = () => {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={() => setCount({type : 'increment'})}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount({type : 'decrement'})}>-</button>
        </div>
    )
}

export default Reducer
