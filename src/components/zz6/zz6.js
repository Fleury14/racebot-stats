import React, { useEffect, useState } from 'react'
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import ZZ6Onramp from './zz6onramp';
import ZZ6Standings from './zz6standings';
import Papa from 'papaparse';
import './zz6.scss'

const ZZ6 = (props) => {

  const [ view, setView ] = useState("onramp");

  return (
    <div className='zz6'>
      <Navbar />
      <img src="images/zz6-announce.png" alt="Highway to the Zemus Zone VI" className="w-100" />
      <div className='zz6-nav'>
        <ul>
          <li className='zz6-nav-item' onClick={() => {setView("onramp")}}>On-Ramp</li>
          <li className='zz6-nav-item' >Schedule</li>
          <li className='zz6-nav-item' onClick={() => {setView("standings")}}>Standings</li>
          <li className='zz6-nav-item'>Off-Ramp</li>
        </ul>
      </div>
      {view === "onramp" ? <ZZ6Onramp/> : null}
      {view === "standings" ? <ZZ6Standings /> : null}
    </div>
  );
}

export default ZZ6;