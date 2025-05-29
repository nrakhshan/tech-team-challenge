import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members_details.json")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error("Error loading member data:", err));
  }, []);

  return (
    <div className="app-container">
      <div className="leaf-container">
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src={`/leaves/leaf${(i % 2) + 1}.png`}
            className="falling-leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
            alt="leaf"
          />
        ))}
      </div>
      <h1 className="title">Meet the F!ROSH Orientation Committee!</h1>
      <div className="grid">
        {members.map((member, index) => (
          <div key={index} className="card">
            <img
              src={`/${member.picture}`}
              alt={member.name}
              className="card-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/memberphotos/default.jpg"; 
              }}
            />
            <div className="card-content">
              <h2>{member.name}</h2>
              <p className="role">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
