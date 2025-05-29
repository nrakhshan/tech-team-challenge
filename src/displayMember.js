import React from 'react';
import data from './members_details.json'

function AllMembers() {
    return(
    <div className="info">
        <div className="section">
          <h1 className='position'>Co-Orientation Chairs</h1>
          <div className='members'>
            {data.filter(member => member.position === "Co-Orientation Chair").map((member) => (
              <div key={member.name} className='memberCard'>
                <div className = 'memberCard-inner'>
                  <div className='memberCard-front'>
                    <h2 className='memberName'>{member.name}</h2>
                    <img src={member.picture} alt={member.name} className='memberPhoto'>
                    </img>
                  </div>
                  <div className='memberCard-back'>
                    <h2>{member.position}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h1 className='position'>Vice Chairs</h1>
          <div className='members'>
            {data.filter(member => member.position.includes("VC")).map((member) => (
              <div key={member.name} className='memberCard'>
                <div className = 'memberCard-inner'>
                  <div className='memberCard-front'>
                    <h2 className='memberName'>{member.name}</h2>
                    <img src={member.picture} alt={member.name} className='memberPhoto'>
                    </img>
                  </div>
                  <div className='memberCard-back'>
                    <h2>{member.position}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}
export default AllMembers;