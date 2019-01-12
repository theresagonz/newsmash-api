import React from 'react';
import history from './history';

export default function SaveElement(props) {
  const { id, mash, saving, saved, saveMash, setSaved } = props;
  const handleClick = async () => {
    await saveMash(mash);
    history.push(`/mashes/saved/${props.recentMashes[0].id}`);
    setSaved();
  };

  let saveElement;
  if (saving) {
    saveElement = (
      <div className="star saving-label">&#9733; Saving</div>
    );
  } else if (id || saved) {
    saveElement = <div className="star saved-label">&#9733; Saved</div>;
  } else {
    saveElement = (
      <div className="star save-button" onClick={handleClick}>
        &#9733; Save
      </div>
    );
  }

  return <React.Fragment>{saveElement}</React.Fragment>;
}
