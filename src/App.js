import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import data from './members_details.json'
import Footer from './footer'
import AllMembers from './displayMember'
import ConfettiBtn from './confetti';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Welcome to F!rosh 2T5!</h1>
      </div>

      <div className='learn-about'>
        <h1 className='title'>Learn About the Orientation Committee!</h1>
      </div>
      <AllMembers />
      <ConfettiBtn />
      <Footer />
    </div>
  );
}

export default App;
