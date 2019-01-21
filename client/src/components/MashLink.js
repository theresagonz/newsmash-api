import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default function MashLink({ mash }) {
  const path = `/mashes/saved/${mash.id}`;
  const topicTitleCase = _.startCase(_.replace(mash.topic, /-/g, ' '));
  return (
    <div key={mash.id} className="sidebar-link">
      <Link to={path}>{topicTitleCase}</Link>
      <span>{mash.likes}</span>
    </div>
  );
}
