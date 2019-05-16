import React from 'react';
import { Button } from 'reactstrap';
import './RivalModal.scss';

const RivalModal = (props) => {
  const { close, player, rival, raceData } = props;
  console.log('props', props);
  return (
    <div className="rival-modal-bg">
      <div className="rival-modal-body">
        <h1>Rivalry Data</h1>
        <Button color="danger" onClick={() => close()}>Close</Button>
      </div>
    </div>
  );
}

export default RivalModal;