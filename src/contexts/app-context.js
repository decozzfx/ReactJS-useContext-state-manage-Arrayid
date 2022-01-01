import { createContext, useState, useEffect, useContext, useReducer } from "react";

export const AppContext = createContext({})

export function useAppContext(){
  return useContext(AppContext)
}

function reducer(state, action) {
  switch(action.type){
    case 'updateUser':
      return {...state, user: action.payload}
    case 'toggleTheme':
      return{...state, theme: state.theme === 'light' ? 'dark' : 'light'}
    default:
      throw new Error(`unhandled action type: ${action.type}`)
  }
} 

const initialState = {
  user : {},
  theme : 'dark'
}

export function AppProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
      const user = {
        name : 'john doe',
        avatar : 'https://randomuser.me/api/portraits/men/41.jpg'
      }
      dispatch({type : 'updateUser', payload : user})
    },[])
  
    const appContextValue = [state, dispatch]
  
    return(
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}