import React from 'react';
import './App.css';
import members from './members_details.json';

function App() {
  return (
  <div
    className="App"
    style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: '2rem',
        width: '100%',
        maxWidth: '1200px',
        boxSizing: 'border-box',
        borderRadius: '12px'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>F!rosh Orientation Committee</h1>
      <div className="members-grid">
        {members.map((member, idx) => (
          <div className="member-card" key={idx}>
            <img src={member.picture} alt={member.name} />
            <h2 style={{ color: 'black' }}>{member.name}</h2>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default App;
