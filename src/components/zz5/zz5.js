import React from 'react';
import { Navbar } from '..';
import './zz5.scss';

const ZZ5 =  (props) => {
  return (
    <>
      <Navbar />
      <div className="zz5-body">
        <h1>ZZ5</h1>
        <h2>Blue Moon Bracket</h2>
        <iframe title="bluemoon" src="https://challonge.com/ZZ5Blue/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
        <h2>Red Moon Bracket</h2>
        <iframe title="redmoon" src="https://challonge.com/ZZ5Red/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
      </div>
    </>
  );
}

export default ZZ5;