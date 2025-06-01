import React from 'react';
import members from '../../members_details.json';
import './MemberCard.css';


function MemberCard({ member }) {
  return (
    
    <div id="team" className="container">
        {members.map((member, idx) => (
          <div className="card" key={idx}>
          <img src={member.picture} alt={member.name} />
          <div className="overlay">
            <div className="extra">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          </div>
        </div>

        ))}
      </div>
  );
}

export default MemberCard;
