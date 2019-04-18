import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBotData } from '../../redux/actions';
import { GetCurrentRaces } from '../../helpers'
import WinLoss from '../win-loss/WinLoss';
import CurrentRaces from '../current-races/CurrentRaces';
import { Navbar } from '..';
import './Main.scss';

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

class MainComponent extends Component {
  state = {
    data: null,
    error: null,
  }
  
  componentDidMount() {
    this.props.getData();
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

  render() {
    // console.log('props', this.props);
    // console.log('state', this.state);
    const { data } = this.state;
    return (
      <div className="main-body">
        <Navbar />
        {data && (
          <React.Fragment>
            <div className="p-5">
              <CurrentRaces data={GetCurrentRaces(data.items)} />
            </div>
            
            <WinLoss data={data} />
          </React.Fragment>
          
        )}
        {/* {this.state.error && <p>{this.state.error}</p>} */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);
