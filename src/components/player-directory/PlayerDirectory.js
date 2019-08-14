import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Navbar } from '..';
import { ReduxRacerData } from '../redux-data';
import PlayerTable from './PlayerTable';
import './PlayerDirectory.scss';

class PlayerDirectory extends Component {
  state = {
    page: 1,
    startIndex: 0,
    endIndex: 19,
    sortField: null,
    sortOrder: null,
  }

  triggerSort(field) {
    const { sortField } = this.state;
    if (field === sortField) {
      this.setState(prevState => ({ sortOrder: prevState.sortOrder === 'ASC' ? 'DESC' : 'ASC' }));
    } else {
      this.setState({ sortField: field, sortOrder: 'ASC' });
    }
    
  }

  sortPlayers(racerData) {
    const { sortField, sortOrder } = this.state;
    if (!racerData) {
      return null;
    }
    return racerData.sort((a, b) => {
      switch (sortField) {
        case 'cookies':
          return sortOrder === 'DESC' ? b.cookies - a.cookies : a.cookies - b.cookies;
        case 'races':
          return sortOrder === 'DESC' ? b.race_details.races_run - a.race_details.races_run : a.race_details.races_run - b.race_details.races_run;
        case 'seeds':
          return sortOrder === 'DESC' ? b.race_details.seeds_rolled - a.race_details.seeds_rolled : a.race_details.seeds_rolled - b.race_details.seeds_rolled;
        case 'wins':
          return sortOrder === 'DESC' ? b.race_details.races_first - a.race_details.races_first : a.race_details.races_first - b.race_details.races_first;
        default:
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
      }
    })
  }

  nextPage(totalPlayers) {
    const { page } = this.state;
    if (page === Math.ceil(totalPlayers / 20)) {
      return;
    }
    this.setState(prevState => { 
      return {
        page: prevState.page + 1,
        startIndex: (prevState.page) * 20,
        endIndex: ((prevState.page) * 20) + 19 < totalPlayers ? ((prevState.page) * 20) + 19 : totalPlayers - 1,
      }
    })
  }

  previousPage() {
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
      <ReduxRacerData>
        {(reduxData) => {
          const racerData =  reduxData.racerData ? reduxData.racerData.items : null;
          const { startIndex, endIndex } = this.state;
          let sortedData = racerData ? this.sortPlayers(racerData) : null;
          let paginatedData = racerData ? sortedData.filter((race, index) => index >= startIndex && index <= endIndex) : null;
          if (racerData) {
            return (
              <div>
                <Navbar />
                <div className="player-directory-body">
                  <div className="d-flex justify-content-between mb-3">
                    <Button onClick={() => this.previousPage()} color="primary">PREVIOUS</Button>
                    <h3 className="text-uppercase">Displaying racer {startIndex + 1} to {endIndex + 1} out of {racerData.length}</h3>
                    <Button onClick={() => this.nextPage(racerData.length)} color="primary">NEXT</Button>
                  </div>
                  <PlayerTable
                    data={paginatedData}
                    cookieSort={() => this.triggerSort('cookies')}
                    racesRunSort={() => this.triggerSort('races')}
                    seedsSort={() => this.triggerSort('seeds')}
                    winsSort={() => this.triggerSort('wins')} 
                  />
                </div>
              </div>
            );
          }
          return null;
        }}
      </ReduxRacerData>
    );
    
  }
}

export default PlayerDirectory;
