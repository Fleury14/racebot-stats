import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBotData } from '../../redux/actions';
import { Navbar } from '..';
import { ParseWagers } from '../../helpers';

const mapStateToProps = (state) => {
  return {
    botData: state.botData,
    loading: state.botData.loading,
  }
}

const mapActionsToProps = dispatch => ({
  getData() {
    dispatch(getBotData());
  }
});

class Wagers extends Component {
  state = {
    data: null,
    error: null,
    loading: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.setState({ data: prevState.data });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.botData.data !== prevState.data | nextProps.botData.error) {
      return { data: nextProps.botData.data, error: nextProps.botData.error, loading: nextProps.botData.loading }
    } else if(nextProps.loading !== prevState.loading) {
      return { loading: nextProps.loading };
    } else {
      return null;
    }
  }
  
  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    const wageData = ParseWagers(this.state.data);
    // console.log('proppys', this.props);
    // console.log('stizzate', this.state);
    return (
      <div>
        <Navbar />
        <h1>Wagers</h1>
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapActionsToProps)(Wagers)