import React, { Component } from 'react';
import { Button } from 'reactstrap';
import RaceTable from './RaceTable';
import { Navbar } from '..';
import { ReduxMainData } from '../redux-data';
import './RaceDirectory.scss';

class RaceDirectory extends Component {
  state = {
    data: null,
    error: null,
    startIndex: 0,
    endIndex: 19,
    page: 1,
  }

  nextPage(totalRaces) {
    const { page } = this.state;
    if (page === Math.ceil(totalRaces / 20)) {
      return;
    }
    this.setState(prevState => { 
      return {
        page: prevState.page + 1,
        startIndex: (prevState.page) * 20,
        endIndex: ((prevState.page) * 20) + 19 < totalRaces ? ((prevState.page) * 20) + 19 : totalRaces - 1,
      }
    })
  }

  previousPage(totalRace) {
    const { page } = this.state;
    if (page === 1) {
      return;
    }
    this.setState(prevState => {
      return {
        page: prevState.page - 1,
        startIndex: ((prevState.page - 2) * 20),
        endIndex: ((prevState.page - 2) * 20) + 19,
      }
    })
  }

  render() {
    return (
      <ReduxMainData>
        {(reduxData) => {
          const { startIndex, endIndex } = this.state;
          const apiResult = reduxData.botData ? reduxData.botData.items : reduxData.botData;
          if (!apiResult) return null;
          let FERaces = apiResult.filter(race => race && race.game && race.game === 'ff4fe');
          FERaces.sort((a, b) => {
            const timeA = new Date(a.created);
            const timeB = new Date(b.created);
            return timeB.getTime() - timeA.getTime();
          });
          let totalRace = FERaces.length;
          FERaces = FERaces.filter((race, index) => index >= startIndex && index <= endIndex)
          return (
            <div>
              <Navbar />
              <div className="race-directory-body">
                <div className="race-directory-table-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Button onClick={() => this.previousPage(totalRace)} color="primary">PREVIOUS</Button>
                    <h3 className="text-uppercase">Displaying race {startIndex + 1} to {endIndex + 1} out of {totalRace}</h3>
                    <Button onClick={() => this.nextPage(totalRace)} color="primary">NEXT</Button>
                  </div>
                  <RaceTable data={FERaces} />
                </div>          
              </div>
            </div>
          );
        }}
      </ReduxMainData>
    );
    
  }
}

export default RaceDirectory;
