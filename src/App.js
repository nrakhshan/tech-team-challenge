import React from 'react';
import './App.css';
import data from './members_details.json'

function App() {
  let nerdsInfo = data.map(nerd => (
    <div key={nerd.name}>
      <h1>{nerd.name}</h1>
      <p>{nerd.position.replaceAll('O', '🅾️')}</p>
      <img src={nerd.picture}></img>
    </div>
  ));
  return (
    <div className="App">
      {nerdsInfo}
    </div>
  );
}

export default App;
