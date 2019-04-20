import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Navbar, WinLoss } from '..';
import { getRacerData, getBotData } from '../../redux/actions/BotActions';
import './RacerStats.scss';


const mapStateToProps = state => ({
  racerData: state.botData.racerData,
  generalData: state.botData.data,
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
  }

  componentDidMount() {
    // if theres go general data, get it
    if (!this.props.generalData || !this.state.generalData) {
      this.props.getData();
      this.setState({ generalData: this.props.generalData});
    }

    this.props.getData(this.props.match.params.racer);
    this.setState({ racerData: this.props.racerData});

  }

  render() {
    const { racerData, generalData } = this.state;
    return (
      <div className="racer-stats-container">
        <Navbar />
        <div className="racer-stats-body p-5">
          {!racerData && <h1>There is no data for this racer.</h1>}
          {racerData && (
            <div>
              <h1 className="racer-title text-uppercase text-center">{racerData.name}</h1>
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
            </div>
            
          )}
        </div>
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapActionsToProps)(RacerStats);