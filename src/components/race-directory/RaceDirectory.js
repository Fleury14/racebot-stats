import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaceTable from './RaceTable';
import { Navbar } from '..';
import { getBotData } from '../../redux/actions';
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


  render() {
    // console.log('props', this.props);
    // console.log('state', this.state);
    const { data } = this.state;
    console.log(data.items);
    const FERaces = data.items.filter(race => race.details && race.details.game && race.details.game === 'ff4fe');
    FERaces.sort((a, b) => {
      const timeA = new Date(a.details.created);
      const timeB = new Date(b.details.created);
      return timeB.getTime() - timeA.getTime();
    })
    return (
      <div>
        <Navbar />
        <div className="race-directory-body">
          <RaceTable data={FERaces} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(RaceDirectory);
