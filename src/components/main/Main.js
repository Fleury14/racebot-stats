import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getBotData } from '../../redux/actions';
import { GetCurrentRaces, GetRecentlyCompleteRaces } from '../../helpers';
import CurrentRaces from '../current-races/CurrentRaces';
import { Navbar, PlayerSearcher, CookieLeaderboard, RecentlyCompletedRaces, LoadingModal } from '..';
import ReduxMainData from '../redux-data/ReduxMainData';
import './Main.scss';

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

class MainComponent extends Component {
  state = {
    error: null,
  }
  
  render() {
    const { history } = this.props;
    return (
      <div className="main-body">
        <Navbar />
        <ReduxMainData>
          {(reduxData) => {
            const data = reduxData.botData;
            const loading = reduxData.loading;
            return (
              <React.Fragment>
              {loading && <LoadingModal />}
              {data && (
                <div className={loading ? 'hide-me' : ''}>
                  <div className="p-5">
                    <CurrentRaces data={GetCurrentRaces(data.items || data)} />
                  </div>
                  <Container fluid >
                    <Row>
                      <Col md="7" className="p-4">
                        <PlayerSearcher navigation={history} />
                        <RecentlyCompletedRaces data={GetRecentlyCompleteRaces(data.items || data)} />
                      </Col>
                      <Col md="5" className="p-4">
                        <CookieLeaderboard />
                      </Col>
                    </Row>
                  </Container>
                </div>  
              )}
              </React.Fragment>
            );
            
          }}
        </ReduxMainData>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);
