import React from 'react';
import members from '../../members_details.json';
import './MemberCard.css';


function MemberCard({ member }) {
  return (
    <div className="container">
        {members.map((member, idx) => (
          <div className="card" key={idx}>
            <img src={member.picture} alt={member.name} />
            <div className="card-content">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default MemberCard;
