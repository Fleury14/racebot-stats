import React, { useEffect, useState } from 'react'
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import ZZ6Onramp from './zz6onramp';
import Papa from 'papaparse';

const ZZ6 = (props) => {

  const [ view, setView ] = useState("onramp");

  return (
    <div className='zz6'>
      <Navbar />
      <h1>ZZ6</h1>
      {view === "onramp" ? <ZZ6Onramp/> : null}
    </div>
  );
}

export default ZZ6;