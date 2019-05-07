import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    console.log('priznops', this.props);
    console.log('stizzate', this.state);
    return (
      <div>
        <Navbar />
        <div className="player-directory-body">
          <h1>Player Directory</h1>
          <PlayerTable data={this.state.racerData} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(PlayerDirectory);
