import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Papa from 'papaparse';
import './omg.scss';

const OMGAsyncView = (props) => {

  // const { races, data } = props;
  
  // if (!races || !races.length) return null;

  const races = [ 'Click race to see results', 'ff4fe-nogjhh-async', 'ff4fe-dxev9q-async', 'ff4fe-fhj7b7-async', 'ff4fe-sxob3x-async', 'ff4fe-rkpxuu-async', 'ff4fe-qne2jo-async', 'ff4fe-8zfink-async', 'ff4fe-stu13x-async']

  const initial_data = {};
  races.forEach(race => {
    initial_data[race] = [];
  });

  const [current, setCurrent] = useState(races[0]);
  const [raceData, setRaceData] = useState(initial_data);


  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRSp_sn77R-r2TsQUopibrv_Orbn2ZsWPvJVkoxGtsbEQvAXrhyQ8AJAp4cb9MV32YnxUE1BCNlaHu9/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-nogjhh-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQnyAq31G6Fg9TOnPUcYs4MLyYcF_hgADf9wCl5w76qFLOD0zqyKD2yBzPngsPz5JXW3aIiqeD8wpxz/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-dxev9q-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])
  
  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCxMyMrUocybwsbTK8-dBEWv_yZHmOlV_NYh826ZQsSj0qCAP-hZHewX2p7ojY5Vg6Y3fW30B1pNxV/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-fhj7b7-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSexTfaglhxpWfSzwOQqzllfhmvxL4Pk_jun11VX8oHe43__hrL7D-zm9QbMNiCuSsLEBR5KVOO8k0G/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-sxob3x-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse(" https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkScQVsndE8G-jC1Tfiqh_exx93LIX4sL7MnoI852q50FHh4HqJpYMXGupzEt6FHgxNwK59VX-sUg/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-rkpxuu-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSorMpzHRe_o8PSQ9FbcPAl5mtjTojTzkhTsslkwVUQoGImwyK9p86KT8WgKleUZeS1vx8XS8_XxHsq/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-qne2jo-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vReArHwHyZDtP9jvrZNNsq57wSXSZDYrfGoeb9JENYT_opboZqGcCV0NvgdhQ8VfOqwy8a1yQwUo_Y2/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-8zfink-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTae1IWRXvfMEwZkYchKzb-97-v1G-pbpeLyDo8T6ioriHtWtg1IIdwesX--UAGtJkReYfwcZ1wjlpF/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setRaceData((prevState) => {
          const newState = prevState;
          newState["ff4fe-stu13x-async"] = results.data;
          return newState;
        })
      },
    });
  }, [])

  const findCutoff = (players) => {
    if(!players) return 0;
    let cutoff = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].Rank > 32) {
        cutoff = i;
        break;
      } 
    }
    return cutoff;
  }

  const cutoff = findCutoff(raceData[current])

  // const currentRace = data.find(race => race.key === current );
  // if (!currentRace) {
  //   console.log('unable to find data for race:', current);
  //   return null;
  // }

  // currentRace.entrants.sort((a, b) => {
  //   const aRank = isNaN(a.placement) ? 99 : a.placement;
  //   const bRank = isNaN(b.placement) ? 99 : b.placement;
  //   return a.placement - b.placement;
  // })

  return (
    <Container>
      <Row>
        {races.map(race => {
          return (
            <Col md="2" key={race}>
              <button className={`omg-button ${race === current ? 'omg-active' : ''}`} onClick={() => setCurrent(race)}>
                {race}
              </button>
            </Col>)
        })}
      </Row>
      <Row className="omg-title-row omg-row">
        <Col md="1">Rank</Col>
        <Col md="6">Name</Col>
        <Col md="5">Time</Col>
      </Row>
      {raceData[current].map((entrant, index) => {
        const isWinner = entrant.Rank === "1";
        const gotPoints = parseInt(entrant.Rank) <= 32 && parseInt(entrant.Rank) > 1;
        
        return (
          <Row key={entrant.Player} className={`omg-row ${isWinner ? 'omg-ind-winner' : ''} ${gotPoints && index % 2 === 0 ? 'omg-stripe-1' : ''} ${gotPoints && index % 2 === 1 ? 'omg-stripe-2' : ''} ${index === cutoff ? 'omg-cutoff' : ''}`}>
            <Col md="1">{entrant.Rank}</Col>
            <Col md="6">{entrant.Player}</Col>
            <Col md="5">{entrant.Time}</Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default OMGAsyncView