import React from 'react';
import members from './members_details.json';
import './Members.css';

function Members() {
  // Split members into 3 rows
  const row1 = members.slice(0, 2);
  const row2 = members.slice(2, 5);
  const row3 = members.slice(5, 7);

  // Reusable row rendering function
  const renderRow = (group, rowKey) => (
    <div key={rowKey} className="member-row">
      {group.map((member, index) => (
        <div key={index} className="member-card">
          <img src={member.picture} alt={member.name} />
          <h2>{member.name}</h2>
          <p>{member.position}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="members-container">
      <h1>F!ROSH Orientation Committee</h1>
      {renderRow(row1, 'row1')}
      {renderRow(row2, 'row2')}
      {renderRow(row3, 'row3')}
      <p className="credit">~Made by Jiya Shukla</p>
    </div>
  );
}

export default Members;
