import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getBotData } from '../../redux/actions';
import { GetCurrentRaces, GetRecentlyCompleteRaces } from '../../helpers';
import CurrentRaces from '../current-races/CurrentRaces';
import { Navbar, PlayerSearcher, CookieLeaderboard, RecentlyCompletedRaces } from '..';
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
    // console.log('state', this.state);
    const { history } = this.props;
    const { data } = this.state;
    return (
      <div className="main-body">
        <Navbar />
        {data && (
          <React.Fragment>
            <div className="p-5">
              <CurrentRaces data={GetCurrentRaces(data.items)} />
            </div>
            <Container fluid >
              <Row>
                <Col md="7" className="p-4">
                  <PlayerSearcher navigation={history} />
                  <RecentlyCompletedRaces data={GetRecentlyCompleteRaces(data.items)} />
                </Col>
                <Col md="5" className="p-4">
                  <CookieLeaderboard />
                </Col>
              </Row>
            </Container>
            
          </React.Fragment>
          
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);
