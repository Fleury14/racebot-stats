import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Container, Row, Col } from 'reactstrap';
import { parseZZ6Standings } from '../../helpers';
import './zz6standings.scss';

const ZZ6Standings = (props) => {
  
  const SHEET_REF = {
    GROUP: "_18",
    NAME: "",
  };
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

  function renderGroup(name) {
    if (!standings || !standings[name]) return null;
    const result = standings[name].map(standing => {
      return (
        <Row className="standings-data-row" key={standing[SHEET_REF.NAME]}>
          <Col md="6">{standing[SHEET_REF.NAME]}</Col>
          <Col md="6">0-0</Col>
        </Row>
      );
    });
    return result;
  }

  return (
    <div>
      <h2>Standings</h2>
      {/* <div className="standings-container">
        <div className="standings-box">
          <img className="standings-image" src="images/zz6-dmachin.png" />
        </div>
        <div className="standings-box">
          <img className="standings-image" src="images/zz6-macgiant.png" />
        </div>
        <div className="standings-box">
          <img className="standings-image" src="images/zz6-warlock.png" />
        </div>
        <div className="standings-box">
          <img className="standings-image" src="images/zz6-yellow.png" />
        </div>
      </div> */}
      <Container>
        <Row>
          <Col md="6">
            <div>
              <img className="standings-image" src="images/zz6-dmachin.png" />
              <Container>
                <Row className="standings-data-row standings-header">
                  <Col md="6">Name</Col>
                  <Col md="6">Record</Col>
                </Row>
                {renderGroup("dMachin")}
              </Container>
            </div>
          </Col>
          <Col md="6">
            <div>
              <img className="standings-image" src="images/zz6-macgiant.png" />
            </div>
          </Col>
          <Col md="6">
            <div>
              <img className="standings-image" src="images/zz6-warlock.png" />
            </div>
          </Col>
          <Col md="6">
            <div>
              <img className="standings-image" src="images/zz6-yellow.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default ZZ6Standings;
