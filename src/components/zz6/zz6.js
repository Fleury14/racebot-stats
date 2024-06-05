import React, { useEffect, useState } from 'react'
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import ZZ6Onramp from './zz6onramp';
import Papa from 'papaparse';
import './zz6.scss'

const ZZ6 = (props) => {

  const [ view, setView ] = useState("onramp");

  return (
    <div className='zz6'>
      <Navbar />
      <img src="images/zz6-announce.png" alt="Highway to the Zemus Zone VI" className="w-100" />
      {view === "onramp" ? <ZZ6Onramp/> : null}
    </div>
  );
}

export default ZZ6;