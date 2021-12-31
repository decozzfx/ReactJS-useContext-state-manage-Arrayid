import { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext({})

export function useAppContext(){
  return useContext(AppContext)
}

export function AppProvider({children}){
    const [user, setUser] = useState({})
    const [theme, setTheme] = useState('dark')
  
    useEffect(() => {
      const user = {
        name : 'john doe',
        avatar : 'https://randomuser.me/api/portraits/men/41.jpg'
      }
      setUser(user)
    },[])
  
    const appContextValue = {
      user,
      setUser,
      theme,
      setTheme,
    }
  
    return(
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}