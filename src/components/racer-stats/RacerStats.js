import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar, WinLoss, Twov2Stats } from '..';
import { getRacerData, getBotData } from '../../redux/actions/BotActions';
import './RacerStats.scss';
import parse2v2Data from '../../helpers/Parse2v2';


const mapStateToProps = state => ({
  racerData: state.botData.racerData,
  generalData: state.botData.data,
  currentRacer: null,
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
    racerData: null,
    generalData: null,
    twov2Data: null,
  }

  componentDidMount() {
    // if theres go general data, get it
    if (!this.props.generalData || !this.state.generalData) {
      this.props.getGeneralData();
      this.setState({ generalData: this.props.generalData, twov2Data: parse2v2Data(this.props.generalData.items) });
    }
    this.props.getData(this.props.match.params.racer);
    this.setState({ racerData: this.props.racerData, currentRacer: this.props.match.params.racer });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.racer !== prevState.currentRacer) {
      nextProps.getData(nextProps.match.params.racer);  
      return { racerData: nextProps.racerData, currentRacer: nextProps.match.params.racer }
    } else return null;
  }
  
  componentDidUpdate(prevProps, prevState) {
    if ((!prevState.racerData) || prevProps.racerData.name !== this.state.racerData.name) {
      this.setState({ racerData: prevProps.racerData });
    }
  }


  render() {
    const { racerData, generalData, currentRacer, twov2Data } = this.state;
    return (
      <div className="racer-stats-container">
        <Navbar />
        <div className="racer-stats-body p-5">
          {!racerData && <h1>There is no data for this racer.</h1>}
          {racerData && (
            <div>
              <h1 className="racer-title text-uppercase text-center">{currentRacer}</h1>
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
                        {racerData.race_details.races_completed.map((race, index) => {
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
  }
  
}

export default connect(mapStateToProps, mapActionsToProps)(RacerStats);