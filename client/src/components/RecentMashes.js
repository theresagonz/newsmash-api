import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class RecentMashes extends React.Component {
  state = {};

  handleClick = (id) =>  {
    this.setState({
      [id]: (this.state[id] || 0) + 1
    });
  }

  render() {
    const savedMashLinks = this.props.recentMashes
      ? this.props.recentMashes.map(mash => {
          return (
            <div key={mash.id} className="sidebar-link">
              <Link to={`/mashes/saved/${mash.id}`}>
                {`${_.startCase(_.replace(mash.topic, /-/g, ' '))}`}
              </Link>
              <span className="like-button" onClick={() => this.handleClick(mash.id)}>&hearts;</span>
              <span>{this.state[mash.id] || 0}</span>
            </div>
          );
        })
      : null;

    return (
      <div className="sidebar-container">
        <div className="sidebar-heading">Saved Mashes</div>
        {savedMashLinks}
      </div>
    );
  }
}

export default RecentMashes;
