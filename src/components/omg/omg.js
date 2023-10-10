import React, { useEffect, useState } from 'react';
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import { parseOMG } from '../../helpers/parseOMG';

const OMG = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getOMGData() {
      const OMGdata = await parseOMG();
      setData(OMGdata);
    }
    getOMGData();
  }, [])

  // const OMGdata = parseOMG();
  console.log('omgdata', data)

  return (
    <div>
      <Navbar />
      <h1>OMG</h1>
    </div>
  )

}

export default OMG;
