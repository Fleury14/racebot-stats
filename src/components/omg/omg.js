import React, { useEffect, useState } from 'react';
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import { parseOMG } from '../../helpers/parseOMG';
import OMGAsyncView from './omgAsyncsView';
import OMGBracketView from './omgBracketView';
import { OMGasyncs } from '../../data/omg-asyncs';
import Papa from 'papaparse';
import './omg.scss';

const OMG = (props) => {

  const [data, setData] = useState([]);
  const [sheetData, setSheetData] = useState([]);

  // useEffect(() => {
  //   async function getOMGData() {
  //     const OMGdata = await parseOMG();
  //     setData(OMGdata);
  //   }
  //   getOMGData();
  // }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS-t3GKUF_Y0vTTfakjIJpXr2m3Q__Pvrtgtoqqx3QXXTT-mNT6mkJYGR_WhZL6fMYzXN452nmmG95Q/pub?gid=13871543&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        console.log('sheet results', results);
        setSheetData(results);
      }
    })
  }, [])

  // const OMGdata = parseOMG();
  // console.log('omgdata', data);

  const findCutoff = (players) => {
    let cutoff = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].Rank > 32) {
        cutoff = i;
        break;
      } 
    }
    return cutoff;
  }

  const findNumRaces = (players) => {
    let numRaces = 0;
    for(let raceIndex = 0; raceIndex < 8; raceIndex++)
    {
      let isBlank = true;
      for(let playerIndex = 0; playerIndex < 8; playerIndex++) {
        // console.log(playerIndex, raceIndex, players[playerIndex][`Async ${raceIndex + 1} Score`], players[playerIndex][`Async ${raceIndex + 1} Score`] !== "0");
        if(players[playerIndex][`Async ${raceIndex + 1} Score`] !== "0") isBlank = false;
      }
      if (!isBlank) numRaces = raceIndex + 1;
    }
    return numRaces;
  }

  const leadZero = (rank) => {
    const rankNum = parseInt(rank);
    if (rankNum === NaN) return '';
    return rank;
  }

  const isNotZero = (num) => num === '0' ? num : num;

  const sheetView = (players) => {
    if (!players || !players.length) return null;
    const cutoff = findCutoff(players);
    const numRaces = findNumRaces(players);
    return (
      <Container>
        <Row className="omg-title-row omg-row">
          <Col md="1">Rank</Col>
          <Col md="3">
            Name
          </Col>
          <Col md="2">Top 3 Points</Col>
          <Col md="2">Dropped Scores</Col>
          <Col md="2">Sum of Dropped Scores</Col>
          <Col md="2">Total Points</Col>
        </Row>
        {players.map((player, index) => {
          const isCutoff = index === cutoff;
          const hasWon = player["Top Score"] === "32";
          return (
            <Row key={player.Player} className={`omg-row ${isCutoff ? 'omg-cutoff' : ''} ${index < numRaces ? 'omg-winner' : ''}`}>
              <Col md="1">{player.Rank}</Col>
              <Col md="3">{player.Player}</Col>
              <Col md="2 d-flex justify-content-start">
                <span className="omg-rank-num">{leadZero(player["Top Score"])}</span>
                <span className="omg-rank-num">{leadZero(player["2nd Score"])}</span>
                <span className="omg-rank-num">{leadZero(player["3rd Score"])}</span>
              </Col>
              <Col md="2" className="d-flex justify-content-start">
                <span className="omg-rank-num">{isNotZero(player["Dropped Score 1"])}</span>
                <span className="omg-rank-num">{isNotZero(player["Dropped Score 2"])}</span>
                <span className="omg-rank-num">{isNotZero(player["Dropped Score 3"])}</span>
                <span className="omg-rank-num">{isNotZero(player["Dropped Score 4"])}</span>
                <span className="omg-rank-num">{isNotZero(player["Dropped Score 5"])}</span>
              </Col>
              <Col md="2">{player["Sum of Dropped Scores"]}</Col>
              <Col md="2">{player.Score}</Col>
            </Row>
          )
        })}
      </Container>
    )
  }
  
  const overallView = (players) => {
    if (!players || !players.length) return null;
    return (
      <Container>
        <Row className="omg-title-row omg-row">
          <Col md="1">Rank</Col>
          <Col md="5">
            Name
          </Col>
          <Col md="3">Races Run</Col>
          <Col md="2">Top 3 Points</Col>
          <Col md="1">Total Points</Col>
        </Row>
        {players.map((player, index) => {
          return (
            <Row key={player.name} className={`${player.asyncwins.length > 0 ? 'omg-winner' : ''} omg-row ${index === 31 ? 'omg-cutoff' : ''}`}>
              <Col md="1" className="omg-rank">{index + 1}</Col>
              <Col md="5">{player.name}</Col>
              <Col md="3">{player.races}</Col>
              <Col md="2">{player.top3.map(pts => <span key={pts}>{pts} </span>)}</Col>
              <Col md="1">{player.points}</Col>
            </Row>
          );
        })}
      </Container>
    )
  }

  return (
    <div className="omg">
      <Navbar />
      <div className="d-flex justify-content-center">
        <img src="images/omg-banner.jpg" alt="Omnidexterous Memers guild, the FF4FE fall event" className="omg-banner" />
      </div>
      <div>
        <OMGBracketView />
      </div>
      <h2 className="omg-title">Qualifier Standings</h2>
      {/* <div>
        {overallView(data.players)}
      </div> */}
      <div>
        {sheetView(sheetData.data)}
      </div>
      <div className="omg-divider"></div>
      <div>
        <h2 className="omg-title">Individual Races</h2>
        <OMGAsyncView />
        {/* {data.races && <OMGAsyncView races={OMGasyncs} data={data.races} />} */}
      </div>
    </div>
  )

}

export default OMG;
