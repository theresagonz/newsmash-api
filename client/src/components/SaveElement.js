import React from 'react';
import history from './history';

export default function SaveElement(props) {
  const { saving, id, mash, saveMash, setSaved, saved, recentMashes } = props;

  const handleClick = async () => {
    await saveMash(mash);
    history.push(`/mashes/saved/${props.recentMashes[0].id}`);
    setSaved();
  };

  let saveElement;
  if (saving) {
    saveElement = (
      <div className="heart-shape saving-label">&hearts; Saving</div>
    );
  } else if (id || saved) {
    saveElement = <div className="heart-shape saved-label">&hearts; Saved</div>;
  } else {
    saveElement = (
      <div className="heart-shape save-button hover-div" onClick={handleClick}>
        &hearts; Save
      </div>
    );
  }

  return <React.Fragment>{saveElement}</React.Fragment>;
}
