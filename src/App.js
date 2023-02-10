import './App.css';
import SideMenu from './components/sideMenuComponent';
import Home from './components/homeComponent';
import Search from './components/searchCompenent';
import { useState } from 'react';

function App() {

  const [receivedData, setReceivedData] = useState("");

  const handleData = stringToSearch => {
    setReceivedData(stringToSearch);
    console.log(stringToSearch)
  };

  


  return (
    <div className="App d-flex mx-5">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home substring={receivedData} />
      <div className='vertical-divider'></div>
      <Search handleData={handleData} />
    </div>
  );
}

export default App;
