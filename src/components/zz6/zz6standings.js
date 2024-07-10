import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Container, Row, Col } from 'reactstrap';
import { parseZZ6Standings } from '../../helpers';

const ZZ6Standings = (props) => {
  
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRYX3L_8G7Bdv7QQCIz4Vj9WJwv7rWhhD9Vv3yP9mQqHn_GPpkaW6n4M4JPJTOE5tF_u_-KkW_aal8W/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        // console.log(' zz6 sheet results', results);
        const parsedStandings = parseZZ6Standings(results.data);
        console.log('zz6 standings', parsedStandings);
        setStandings(parsedStandings);
      }
    })
  }, [])

  return (
    <div>
      <h2>Standings</h2>
    </div>
  );

};

export default ZZ6Standings;
