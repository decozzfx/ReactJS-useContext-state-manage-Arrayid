import React, { useReducer, useState } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {...state, count : state.count + action.payload}
        case 'decrement':
            return {...state, count : state.count - action.payload}
        case 'toggleTheme':
            return {...state, theme: state.theme === 'light' ? 'dark' : 'light'}
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
            <br />
            <button onClick={() => dispatch({type : 'increment', payload : 2})}>+</button><br />
            <span>{state.count}</span><br />
            <button onClick={() => dispatch({type : 'decrement', payload : 2})}>-</button><br />
            <hr />
            Theme : {state.theme} <br />
            <br />
            <button onClick={() => dispatch({type : 'toggleTheme'})}>Toggle Theme</button>
        </div>
    )
}

export default Reducer
