import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Navbar } from '..';
import { getAllRacers } from '../../redux/actions';
import PlayerTable from './PlayerTable';
import './PlayerDirectory.scss';

const mapStateToProps = (state) => {
  return {
    racerData: state.botData.allRacerData.items,
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
  }

  componentDidMount() {
    if (!this.props.racerData) {
      this.props.getData();
    }
    let sortedData = this.props.racerData.sort((a, b) => {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({ racerData: sortedData });
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
    let paginatedData = racerData ? racerData.filter((race, index) => index >= startIndex && index <= endIndex) : null;
    
    if (racerData) {
      return (
        <div>
          <Navbar />
          <div className="player-directory-body">
            <div className="d-flex justify-content-between mb-3">
              <Button onClick={() => this.previousPage()} color="primary">PREVIOUS</Button>
              <h3 className="text-uppercase">Displaying race {startIndex + 1} to {endIndex + 1} out of {racerData.length}</h3>
              <Button onClick={() => this.nextPage(racerData.length)} color="primary">NEXT</Button>
            </div>
            <PlayerTable data={paginatedData} />
          </div>
        </div>
      );
    }
    return null;
  }
}

export default connect(mapStateToProps, mapActionsToProps)(PlayerDirectory);
