import React from 'react';

const Community = () => {
  return (
    <div className="stats__community">
      <div className="stats__subtitle">
        <i className="icon-moon-users icon-moon colored"></i>
        Community:
      </div>
      <div>
        <span>Comments:</span>7,856 (383 replies)
      </div>
      <div>
        <span>Collections:</span>0
      </div>
      <div>
        <span>Kumite:</span>567 (639 Started)
      </div>
      <div>
        <span>Translations:</span>4,563 (4,419 approved)
      </div>
      <div>
        <span>Contributed Kata:</span>81
      </div>
      <div>
        <span>Kata Approvals:</span>61
      </div>
    </div>
  );
};
export default Community;
