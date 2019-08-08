import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar, WinLoss, Twov2Stats, LoadingModal } from '..';
import { getRacerData, getBotData } from '../../redux/actions/BotActions';
import { ReduxRacerStatData } from '../redux-data'
import './RacerStats.scss';
import parse2v2Data from '../../helpers/Parse2v2';


const mapStateToProps = state => ({
  racerData: state.botData.racerData,
  generalData: state.botData.data,
  currentRacer: null,
  loading: state.botData.loading,
});

const mapActionsToProps = (dispatch) => ({
  getGeneralData() {
    dispatch(getBotData())
  },
  getData(racer) {
    dispatch(getRacerData(racer))
  }
});

class RacerStats extends Component {
  state = {
    racerData: { name: null},
    generalData: null,
    twov2Data: null,
    loading: false,
    currentRacer: null,
  }

  componentDidMount() {
    if (this.state.currentRacer !== this.props.match.params.racer) {
      this.setState({ currentRacer: this.props.match.params.racer });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <ReduxRacerStatData racerName={this.state.currentRacer}>
          {({ racerRedux, generalRedux, loading }) => {
            const generalData = generalRedux.botData;
            
            const racerData = racerRedux.racerData;
            const currentRacer = this.state.currentRacer;
            const twov2Data = parse2v2Data(generalData);
            let racesCompleted = [];
            if (racerData) {
              racesCompleted = [...new Set(racerData.race_details.races_completed)];
            }
            return (
              <div className="racer-stats-container">
                {loading && <LoadingModal />}
                <Navbar />
                <div className="racer-stats-body p-5">
                  {!racerData && <h1>There is no data for this racer.</h1>}
                  {racerData && !loading && (
                    <div>
                      <h1 className="racer-title text-uppercase text-center">{currentRacer}</h1>
                      {racerData.streamInfo && (
                        <div className="d-flex justify-content-center">
                          <a href={racerData.streamInfo} target="_blank" rel="noopener noreferrer">
                            <button className="racer-data-twitch mb-4">TWITCH CHANNEL</button>
                          </a>
                        </div>
                      )}
                      <div className="racer-first-row">
                        <Container fluid>
                          <Row className="text-center">
                            <Col md="4" className="p-3">
                              <div className="racer-info-box-top p-3">
                                <h2>{racerData.cookies}</h2>
                                <p>Cookies</p>
                              </div>
                            </Col>
                            <Col md="4" className="p-3">
                              <div className="racer-info-box-top p-3">
                                <h2>{racerData.race_details.races_completed.length}</h2>
                                <p>Races Completed</p>
                              </div>
                            </Col>
                            <Col md="4" className="p-3">
                              <div className="racer-info-box-top p-3">
                                <h2>{racerData.race_details.seeds_rolled}</h2>
                                <p>Seeds Rolled</p>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                      <div className="racer-first-row">
                        {generalData && <WinLoss data={generalData} selectedPlayer={this.props.match.params.racer} />}
                      </div>
                      <Container fluid>
                        <Row>
                          <Col md="6" className="p-2">
                            <div className="racer-history">
                              <h5 className="text-uppercase text-center">Recent Races</h5>
                              <div className="d-flex badge-holder">
                                {racesCompleted.map((race, index) => {
                                  return index < 20 ? (
                                    <Link to={`../race/${race}`} key={race}>
                                      <Badge color="primary" className="mr-2 mb-2">{race}</Badge>
                                    </Link>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          </Col>
                          <Col md="6" className="p-2">
                            <div className="racer-history">
                              <div className="d-flex align-items-center lato mb-2">
                                <div className="w-50 pr-4 text-right text-uppercase racer-summary-title">First Places</div>
                                <div className="w-50 pl-4 d-flex align-items-center">
                                  <span className="racer-big-num mr-4">{racerData.race_details.races_first}</span>
                                  <span className="racer-pct-num">({(racerData.race_details.races_first / racerData.race_details.races_run * 100).toFixed(1)}%)</span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center lato mb-2">
                                <div className="w-50 pr-4 text-right text-uppercase racer-summary-title">Second Places</div>
                                <div className="w-50 pl-4 d-flex align-items-center">
                                  <span className="racer-big-num mr-4">{racerData.race_details.races_second}</span>
                                  <span className="racer-pct-num">({(racerData.race_details.races_second / racerData.race_details.races_run * 100).toFixed(1)}%)</span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center lato mb-2">
                                <div className="w-50 pr-4 text-right text-uppercase racer-summary-title">Third Places</div>
                                <div className="w-50 pl-4 d-flex align-items-center">
                                  <span className="racer-big-num mr-4">{racerData.race_details.races_third}</span>
                                  <span className="racer-pct-num">({(racerData.race_details.races_third / racerData.race_details.races_run * 100).toFixed(1)}%)</span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center lato">
                                <div className="w-50 pr-4 text-right text-uppercase racer-summary-title">Forfeits</div>
                                <div className="w-50 pl-4 d-flex align-items-center">
                                  <span className="racer-big-num mr-4">{racerData.race_details.races_forfeit}</span>
                                  <span className="racer-pct-num">({(racerData.race_details.races_forfeit / racerData.race_details.races_run * 100).toFixed(1)}%)</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          {twov2Data && <Col md="6">
                              <Twov2Stats data={twov2Data.filter(team => team.racer1Name === currentRacer || team.racer2Name === currentRacer)} currentRacer={currentRacer}/>
                          </Col>}
                        </Row>
                      </Container>
                    </div>
                    
                  )}
                </div>
              </div>
            );
          }}
        </ReduxRacerStatData>
      </React.Fragment>
    );
    
  }
  
}

export default connect(mapStateToProps, mapActionsToProps)(RacerStats);