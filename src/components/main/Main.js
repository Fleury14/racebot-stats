import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBotData } from '../../redux/actions';
import WinLoss from '../win-loss/WinLoss';

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
      <div>
        <h1>Main</h1>
        {data && <WinLoss data={data}/>}
        {/* {this.state.error && <p>{this.state.error}</p>} */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);
