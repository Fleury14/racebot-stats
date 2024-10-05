import React, { useState } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import './zz6restream.scss';

const ZZ6RestreamInfo = (props) => {
  const {channel, comms, restream, tracker } = props;
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  if(!channel) return null;

  return (
    <div>
      <p><strong>Channel:</strong> {channel} <button onClick={() => toggleOpen()}>More Info</button></p>
      <div className={open ? 'restream-show' : 'restream-hidden'}>
        <p><strong>Comms:</strong> {comms}</p>
        <p><strong>Restream:</strong> {restream} <strong>Tracker:</strong> {tracker}</p>
      </div>
    </div>
  );
}

export default ZZ6RestreamInfo;