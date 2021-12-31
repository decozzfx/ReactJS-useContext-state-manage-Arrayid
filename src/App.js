import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar.js'
import { AppContext } from './components/contexts/app-context';

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const user = {
      name : 'john doe',
      avatar : 'https://randomuser.me/api/portraits/men/41.jpg'
    }
    setUser(user)
  },[])

  const appContextValue = {
    user,
  }

  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
      <Navbar/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
