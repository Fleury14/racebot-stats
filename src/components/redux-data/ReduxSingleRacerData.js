import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRacerData } from '../../redux/actions/BotActions';

const mapStateToProps = state => ({
  racerData: state.botData.racerData,
  time: null,
});

const mapActionsToProps = (dispatch) => ({
  getData(racer) {
    dispatch(getRacerData(racer))
  }
});

// NOTE: Expects props "racerName"

class ReduxSingleRacerData extends Component {
  state = {
    racerData: null,
    time: false,
    loading: false,
    
  }

  componentDidMount() {
    //  check the date time of current data. If it either doesn't have one, or it is more than the timelimit in the env, make a new call
        // console.log('****BITDUM BATTLE:', this.props.racerName, 'and', this.props.racerData)
        // this.props.getData(this.props.racerName);
  }

  componentDidUpdate() {
    console.log('prizzops', this.props)
    // if its not loading, then we need to check a few things
    // is there no racename prop? (return)
    // we have no data in state or is there a racename prop but it doesnt match our race data (grab new data)
    // is there a racename prop and it matches our race data but NOT our state data (update state)
    if (!this.props.racerName) {
      
      return
    } else if ((!this.props.racerData) || ((!this.state.racerData || (this.props.raceName && this.props.raceName !== this.props.racerData.name)) && !this.state.loading)) {
      this.props.getData(this.props.racerName);
      this.setState({ loading: true });
    } else if ((this.props.racerName && this.props.racerName === this.props.racerData.name && (!this.state.racerData || this.props.racerData.name === this.state.racerData.name)) && (!this.state.racerData || this.state.racerData.name !== this.props.racerName)) {
      this.setState({ racerData: this.props.racerData, loading: false });
    }
   
}

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.state)}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ReduxSingleRacerData);
