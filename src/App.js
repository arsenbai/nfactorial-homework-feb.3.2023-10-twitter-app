import './App.css';
import SideMenu from './components/sideMenuComponent';
import Home from './components/homeComponent';

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>
    </div>
  );
}

export default App;
