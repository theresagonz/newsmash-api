import React from 'react';
import MashLink from './MashLink';

const RecentMashes = props => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">Saved Mashes</div>
      {props.recentMashes.map(mash => (
        <MashLink key={mash.id} mash={mash} />
      ))}
    </div>
  );
};

export default RecentMashes;
