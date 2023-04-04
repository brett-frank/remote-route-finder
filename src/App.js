import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import MobileHomePage from './components/MobileHomePage';
import DesktopHomePage from './components/DesktopHomePage';

function App() {

  const isMobile = window.innerWidth < 768;

  return (
    <div className="App">
      {isMobile ? <MobileHomePage /> : <DesktopHomePage />}
    </div>
  );
}

export default App;
