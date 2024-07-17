import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Container, Row, Col } from 'reactstrap';
import { parseZZ6Standings } from '../../helpers';
import './zz6standings.scss';

const ZZ6Standings = (props) => {
  
  const SHEET_REF = {
    GROUP: "_18",
    NAME: "",
    RECORD: "_1",
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

  function getRowClass(index) {
    if (index < 6) return "standings-data-row standings-qual";
    if (index < 10) return "standings-data-row standings-next";
    return "standings-data-row";
  }

  function renderGroup(name) {
    if (!standings || !standings[name]) return null;
    standings[name].sort((a, b) => {
      if (!a[SHEET_REF.RECORD] || !b[SHEET_REF.RECORD]) return 0;
      
      const Anums = a[SHEET_REF.RECORD].split("-")
      const Awins = parseInt(Anums[0]);
      const Alosses = parseInt(Anums[1]);
      const Bnums = b[SHEET_REF.RECORD].split("-")
      const Bwins = parseInt(Bnums[0]);
      const Blosses = parseInt(Bnums[1]);
      if (Awins !== Bwins) return Bwins - Awins;
      return Alosses - Blosses;
      
    })
    const result = standings[name].map((standing, index) => {
      return (
        <Row className={getRowClass(index)} key={standing[SHEET_REF.NAME]}>
          <Col md="6">{standing[SHEET_REF.NAME]}</Col>
          <Col md="6">{standing[SHEET_REF.RECORD]}</Col>
        </Row>
      );
    });
    return result;
  }

  return (
    <div className="zz6-standings">
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
              <Container>
                <Row className="standings-data-row standings-header">
                  <Col md="6">Name</Col>
                  <Col md="6">Record</Col>
                </Row>
                {renderGroup("macGiant")}
              </Container>
            </div>
          </Col>
          <Col md="6">
            <div>
              <img className="standings-image" src="images/zz6-warlock.png" />
              <Container>
                <Row className="standings-data-row standings-header">
                  <Col md="6">Name</Col>
                  <Col md="6">Record</Col>
                </Row>
                {renderGroup("warlock")}
              </Container>
            </div>
          </Col>
          <Col md="6">
            <div>
              <img className="standings-image" src="images/zz6-yellow.png" />
              <Container>
                <Row className="standings-data-row standings-header">
                  <Col md="6">Name</Col>
                  <Col md="6">Record</Col>
                </Row>
                {renderGroup("yellowD")}
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default ZZ6Standings;
