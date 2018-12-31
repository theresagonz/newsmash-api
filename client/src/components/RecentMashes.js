import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const RecentMashes = (props) => {
  console.log('props.recentMashes :', props.recentMashes);

  const savedMashLinks = props.recentMashes
    ? props.recentMashes.map(mash => {
      return (
        <div key={mash.id} className="sidebar-link">
          <Link to={`/mashes/saved/${mash.id}`}>
            {`${_.startCase(_.replace(mash.topic, /-/g, ' '))}`}
          </Link>
        </div>
      );
    })
    : null;
  
  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">Recently saved</div>
        { savedMashLinks }
    </div>
  );
};

export default RecentMashes;
