import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import RaceTable from './RaceTable';
import { Navbar } from '..';
import { getBotData } from '../../redux/actions';
import { FakeLadder } from '../../helpers';
import './RaceDirectory.scss';

const mapStateToProps = (state) => {
  return {
    botData: state.botData,
  }
}

const mapActionsToProps = dispatch => ({
  getData() {
    dispatch(getBotData());
  }
});
class RaceDirectory extends Component {
  state = {
    data: null,
    error: null,
    startIndex: 0,
    endIndex: 19,
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState({ data: prevState.data });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.botData.data !== prevState.data | nextProps.botData.error) {
      return { data: nextProps.botData.data, error: nextProps.botData.error }
    } else return null;
  }

  componentDidMount() {
    this.props.getData();
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
    const { data, startIndex, endIndex } = this.state;
    FakeLadder(data.items);
    let FERaces = data.items.filter(race => race.details && race.details.game && race.details.game === 'ff4fe');
    FERaces.sort((a, b) => {
      const timeA = new Date(a.details.created);
      const timeB = new Date(b.details.created);
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
  }
}

export default connect(mapStateToProps, mapActionsToProps)(RaceDirectory);
