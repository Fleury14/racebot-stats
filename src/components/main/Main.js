import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getBotData } from '../../redux/actions';
import { GetCurrentRaces, GetRecentlyCompleteRaces } from '../../helpers';
import CurrentRaces from '../current-races/CurrentRaces';
import { Navbar, PlayerSearcher, CookieLeaderboard, RecentlyCompletedRaces, LoadingModal } from '..';
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
    data: null,
    error: null,
    loading: false,
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
      return { data: nextProps.botData.data, error: nextProps.botData.error, loading: nextProps.botData.loading }
    } else if(nextProps.loading !== prevState.loading) {
      return { loading: nextProps.loading };
    } else {
      return null;
    }
  }

  render() {
    const { history } = this.props;
    const { data, loading } = this.state;
    console.log('data', data.queryDate);
    return (
      <div className="main-body">
        <Navbar />
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
                  <p className="mt-4">{data.queryDate && 'Last data query: ' + data.queryDate.toLocaleDateString()}</p>
                </Col>
              </Row>
            </Container>
            
          </div>
          
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainComponent);
