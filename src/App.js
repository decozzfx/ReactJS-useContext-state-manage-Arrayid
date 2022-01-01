import './App.css';
import Reducer from './components/Reducer';
import Navbar from './components/Navbar.js'
import { AppProvider } from './contexts/app-context';
import { Setting } from './components/Setting';
import DisplayTheme from './components/DisplayTheme';
import ToggleTheme from './components/ToggleTheme';
import { ThemeProvider } from './contexts/theme-context';

function App() {
 
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider>
          <Navbar/>
          <hr />
          <Setting/>
          <hr />
          <DisplayTheme/>
          <ToggleTheme />
        </ThemeProvider>
      </AppProvider>
      {/* <hr />
      <Reducer/> */}
    </div>
  );
}

export default App;
