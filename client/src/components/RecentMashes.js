import React from 'react';
import MashLink from './MashLink';

class RecentMashes extends React.Component {
  constructor() {
    super();

    this.state = {
      recentMashes: [],
    };
  }

  handleClick = id => {
    this.setState({
      [id]: (this.state[id] || 0) + 1,
    });
  };

  render() {
    const mashes =
      this.state.recentMashes.length === 0
        ? this.props.recentMashes
        : this.state.recentMashes;
    const savedMashLinks = mashes.map(mash => (
      <MashLink mash={mash} />
    ));

    return (
      <div className="sidebar-container">
        <div className="sidebar-heading">Saved Mashes</div>
        {savedMashLinks}
      </div>
    );
  }
}

export default RecentMashes;
