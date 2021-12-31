import React, { useReducer, useState } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {...state, count : state.count + action.payload}
        case 'decrement':
            return {...state, count : state.count - action.payload}
        default:
            throw new Error()
    }
}

const initialState = {
    count : 0,
    theme : 'light'
}

const Reducer = () => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    return (
        <div>
            <button onClick={() => dispatch({type : 'increment', payload : 2})}>+</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({type : 'decrement', payload : 2})}>-</button>
        </div>
    )
}

export default Reducer
