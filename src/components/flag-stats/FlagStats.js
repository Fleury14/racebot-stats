import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getBotData } from '../../redux/actions';
import { parseFlagStats } from '../../helpers';
import { Navbar } from '..'
import './FlagStats.scss';

const mapStateToProps = state => ({
  botData: state.botData,
  loading: state.botData.loading
});

const mapActionsToProps = dispatch => ({
  getData() {
    dispatch(getBotData());
  }
});

class FlagStats extends Component {
  state = {
    data: null,
    loading: false,
  }

  componentDidMount() {
    const { botData } = this.props;
    if (!botData) {
      this.props.getData();
    } else if (botData && botData.data) {
      this.setState({ data: parseFlagStats(botData.data) });
    }
  }

  componentDidUpdate() {
    const { botData } = this.props;
    if (botData && botData.data && !this.state.data) {
    
      this.setState({ data: parseFlagStats(botData.data) });
    }
  }

  render() {
    console.log('state', this.state);
    const { data } = this.state;
    return (
      <div>
         <Navbar />
        {data && (
          <div className="flag-stats-container open-sans">
          <div className="flag-stats-body p-5">
          <h1 className="text-center">Flag stats</h1>
          <p className="text-center mb-5">Races recorded: {data.total}</p>
            <Container fluid>
              <Row>
                <Col md="4" className="mb-4">
                  <div className="text-center">
                    <h2>V Flag</h2>
                    <p>None: {data.V[0]} ({(data.V[0] / data.total * 100).toFixed(1)}%)</p>
                    <p>V1: {data.V[1]} ({(data.V[1] / data.total * 100).toFixed(1)}%)</p>
                    <p>V2: {data.V[2]} ({(data.V[2] / data.total * 100).toFixed(1)}%)</p>
                  </div>
                </Col>
                <Col md="4" className="mb-4">
                  <div className="text-center">
                    <h2>J Flag</h2>
                    <p>None: {data.J[0]} ({(data.J[0] / data.total * 100).toFixed(1)}%)</p>
                    <p>Ji: {data.J.i} ({(data.J.i / data.total * 100).toFixed(1)}%)</p>
                    <p>Js: {data.J.s} ({(data.J.s / data.total * 100).toFixed(1)}%)</p>
                    <p>Ja: {data.J.a} ({(data.J.a / data.total * 100).toFixed(1)}%)</p>
                  </div>
                </Col>
                <Col md="4" className="mb-4">
                  <div className="text-center">
                    <h2>K Flag</h2>
                    <p>None: {data.K[0]} ({(data.K[0] / data.total * 100).toFixed(1)}%)</p>
                    <p>K (by itself): {data.K[1]} ({(data.K[1] / data.total * 100).toFixed(1)}%)</p>
                    <p>Kq: {data.K.q} ({(data.K.q / data.total * 100).toFixed(1)}%)</p>
                    <p>Km: {data.K.m} ({(data.K.m / data.total * 100).toFixed(1)}%)</p>
                    <p>Kt: {data.K.t} ({(data.K.t / data.total * 100).toFixed(1)}%)</p>
                    <p>K!: {data.K.noSafety} ({(data.K.noSafety / data.total * 100).toFixed(1)}%)</p>
                  </div>
                </Col>
                <Col md="4" className="mb-4">
                  <div className="text-center">
                    <h2>C Flag</h2>
                    <p>None: {data.C[0]} ({(data.C[0] / data.total * 100).toFixed(1)}%)</p>
                    <p>C (By itself): {data.C[1]} ({(data.C[1] / data.total * 100).toFixed(1)}%)</p>
                    <p>Cn: {data.C.n} ({(data.K.q / data.total * 100).toFixed(1)}%)</p>
                    <p>Cx: {data.C.x} ({(data.C.x / data.total * 100).toFixed(1)}%)</p>
                    <p>C5: {data.C[5]} ({(data.C[5] / data.total * 100).toFixed(1)}%)</p>
                    <p>-no-dupes: {data.other.noDupes} ({(data.other.noDupes / data.total * 100).toFixed(1)}%)</p>
                    <p>-rescue: {data.other.rescue} ({(data.other.rescue / data.total * 100).toFixed(1)}%)</p>
                    <p>-hobs: {data.other.hobs} ({(data.other.hobs / data.total * 100).toFixed(1)}%)</p>
                  </div>
                </Col>
                <Col md="8" className="mb-4">
                  <div className="text-center">
                    <h2>Character restrictions</h2>
                    <div className="d-flex flag-stats-char">
                        <h3 className="w-33">Char</h3>
                        <h3 className="w-33">Start</h3>
                        <h3 className="w-33">Remove</h3>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Cecil</p>
                        <p className="w-33">{data.charStart.cecil}</p>
                        <p className="w-33">{data.charRestrict.cecil}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Kain</p>
                        <p className="w-33">{data.charStart.kain}</p>
                        <p className="w-33">{data.charRestrict.kain}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Rydia</p>
                        <p className="w-33">{data.charStart.rydia}</p>
                        <p className="w-33">{data.charRestrict.rydia}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Tellah</p>
                        <p className="w-33">{data.charStart.tellah}</p>
                        <p className="w-33">{data.charRestrict.tellah}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Edward</p>
                        <p className="w-33">{data.charStart.edward}</p>
                        <p className="w-33">{data.charRestrict.edward}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Rosa</p>
                        <p className="w-33">{data.charStart.rosa}</p>
                        <p className="w-33">{data.charRestrict.rosa}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Yang</p>
                        <p className="w-33">{data.charStart.yang}</p>
                        <p className="w-33">{data.charRestrict.yang}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Palom</p>
                        <p className="w-33">{data.charStart.palom}</p>
                        <p className="w-33">{data.charRestrict.palom}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Porom</p>
                        <p className="w-33">{data.charStart.porom}</p>
                        <p className="w-33">{data.charRestrict.porom}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Cid</p>
                        <p className="w-33">{data.charStart.cid}</p>
                        <p className="w-33">{data.charRestrict.cid}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">Edge</p>
                        <p className="w-33">{data.charStart.edge}</p>
                        <p className="w-33">{data.charRestrict.edge}</p>
                    </div>
                    <div className="d-flex flag-stats-char">
                        <p className="w-33">FuSoYa</p>
                        <p className="w-33">{data.charStart.fusoya}</p>
                        <p className="w-33">{data.charRestrict.fusoya}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        )}
        
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapActionsToProps)(FlagStats);
