import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar.js'
import { AppContext } from './components/contexts/app-context';
import { Setting } from './components/Setting';
import DisplayTheme from './components/DisplayTheme';
import ToggleTheme from './components/ToggleTheme';

function App() {
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

  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
      <Navbar/>
      <hr />
      <Setting/>
      <hr />
      <DisplayTheme/>
      <ToggleTheme />
      </AppContext.Provider>
    </div>
  );
}

export default App;
