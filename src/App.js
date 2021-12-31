import './App.css';
import Reducer from './components/Reducer';
// import Navbar from './components/Navbar.js'
// import { AppProvider } from './contexts/app-context';
// import { Setting } from './components/Setting';
// import DisplayTheme from './components/DisplayTheme';
// import ToggleTheme from './components/ToggleTheme';

function App() {
 
  return (
    <div className="App">
      {/* <AppProvider>
        <Navbar/>
        <hr />
        <Setting/>
        <hr />
        <DisplayTheme/>
        <ToggleTheme />
      </AppProvider> */}
      <Reducer/>
    </div>
  );
}

export default App;
