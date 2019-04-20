import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from '..';
import { getRacerData } from '../../redux/actions/BotActions';
import './RacerStats.scss';


const mapStateToProps = state => ({
  racerData: state.botData.data,
});

const mapActionsToProps = (dispatch) => ({
  getData(racer) {
    dispatch(getRacerData(racer))
  }
});

class RacerStats extends Component {
  state = {
    racerData: null,
  }

  componentDidMount() {
    this.props.getData(this.props.match.params.racer);
    this.setState({ racerData: this.props.racerData})
  }

  render() {
    console.log('props in racer stats', this.props);
    const { racerData } = this.state;
    return (
      <div className="racer-stats-container">
        <Navbar />
        <div className="racer-stats-body">
          {!racerData && <h1>There is no data for this racer.</h1>}
          {racerData && (
            <div>
              <h1>{racerData.name}</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapActionsToProps)(RacerStats);