import './App.css';
import SideMenu from './components/sideMenuComponent';
import Home from './components/homeComponent';
import NotificationsComponent from './components/notificationsComponent';
import Search from './components/searchCompenent';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


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
      <Routes>
        <Route path="/" element={<Home substring={receivedData} />} />
        <Route path="/notifications" element={<NotificationsComponent />} />
      </Routes>

      <div className='vertical-divider'></div>
      <Search handleData={handleData} />
    </div>
  );
}

export default App;
