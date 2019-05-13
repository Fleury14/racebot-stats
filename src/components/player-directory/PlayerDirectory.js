import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Navbar } from '..';
import { getAllRacers } from '../../redux/actions';
import PlayerTable from './PlayerTable';
import './PlayerDirectory.scss';

const mapStateToProps = (state) => {
  return {
    racerData: state.botData.allRacerData.items || state.botData.allRacerData,
  }
}

const mapActionsToProps = dispatch => ({
  getData() {
    dispatch(getAllRacers())
  }
});

class PlayerDirectory extends Component {
  state = {
    racerData: null,
    page: 1,
    startIndex: 0,
    endIndex: 19,
    sortField: null,
    sortOrder: null,
  }

  componentDidMount() {
    if (!this.props.racerData) {
      this.props.getData();
    }
    this.setState({ racerData: this.props.racerData });
  }

  triggerSort(field) {
    const { sortField } = this.state;
    if (field === sortField) {
      this.setState(prevState => ({ sortOrder: prevState.sortOrder === 'ASC' ? 'DESC' : 'ASC' }));
    } else {
      this.setState({ sortField: field, sortOrder: 'ASC' });
    }
    
  }

  sortPlayers() {
    const { racerData, sortField, sortOrder } = this.state;
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

  // TODO: Do we need to really update props post mount?
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.racerData !== this.state.racerData) {
  //     this.setState({ racerData: prevState.racerData });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.racerData !== prevState.racerData) {
  //     return { racerData: nextProps.racerData }
  //   } else return null;
  // }

  render() {
    const { startIndex, endIndex, racerData } = this.state;
    let sortedData = racerData ? this.sortPlayers() : null;
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
  }
}

export default connect(mapStateToProps, mapActionsToProps)(PlayerDirectory);
