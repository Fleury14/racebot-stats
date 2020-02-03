import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ReduxMainData } from '../redux-data';
import { parseFlagStats } from '../../helpers';
import { LoadingModal } from '..';
import './FlagStats.scss';


const v3FlagStats = (props) => {
  return (
    <ReduxMainData>
      {(reduxData) => {
        const data = parseFlagStats(reduxData.botData ? reduxData.botData.items : null);
        // const v4data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        const loading = reduxData.loading;
        return (
          <div>
            {loading && <LoadingModal />}
            {data && !loading &&  (
              <div className="flag-stats-container open-sans">
              <div className="flag-stats-body p-5">
              <h1 className="text-center">Flag stats</h1>
              <p className="text-center mb-5">Races recorded: {data.total}</p>
                <Container fluid>
                  <Row>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>V Flag (Variant)</h2>
                        <p>None: {data.V[0]} ({(data.V[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>V1: {data.V[1]} ({(data.V[1] / data.total * 100).toFixed(1)}%)</p>
                        <p>V2: {data.V[2]} ({(data.V[2] / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>J Flag (J-Content)</h2>
                        <p>None: {data.J[0]} ({(data.J[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>Ji: {data.J.i} ({(data.J.i / data.total * 100).toFixed(1)}%)</p>
                        <p>Js: {data.J.s} ({(data.J.s / data.total * 100).toFixed(1)}%)</p>
                        <p>Ja: {data.J.a} ({(data.J.a / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>K Flag (Key Items)</h2>
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
                        <h2>C Flag (Characters)</h2>
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
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>P Flag (Pass)</h2>
                        <p>None: {data.P[0]} ({(data.P[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>Ps: {data.P.s} ({(data.P.s / data.total * 100).toFixed(1)}%)</p>
                        <p>Pk: {data.P.k} ({(data.P.k / data.total * 100).toFixed(1)}%)</p>
                        <p>Pt: {data.P.t} ({(data.P.t / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>T Flag (Treasures)</h2>
                        <p>None: {data.T[0]} ({(data.T[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>T1: {data.T[1]} ({(data.T[1] / data.total * 100).toFixed(1)}%)</p>
                        <p>T2: {data.T[2]} ({(data.T[2] / data.total * 100).toFixed(1)}%)</p>
                        <p>T3: {data.T[3]} ({(data.T[3] / data.total * 100).toFixed(1)}%)</p>
                        <p>T4: {data.T[4]} ({(data.T[4] / data.total * 100).toFixed(1)}%)</p>
                        <p>Tg: {data.T.g} ({(data.T.g / data.total * 100).toFixed(1)}%)</p>
                        <p>Tr: {data.T.r} ({(data.T.r / data.total * 100).toFixed(1)}%)</p>
                        <p>Tx: {data.T.x} ({(data.T.x / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>S Flag (Shops)</h2>
                        <p>None: {data.S[0]} ({(data.S[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>S1: {data.S[1]} ({(data.S[1] / data.total * 100).toFixed(1)}%)</p>
                        <p>S2: {data.S[2]} ({(data.S[2] / data.total * 100).toFixed(1)}%)</p>
                        <p>S3: {data.S[3]} ({(data.S[3] / data.total * 100).toFixed(1)}%)</p>
                        <p>S4: {data.S[4]} ({(data.S[4] / data.total * 100).toFixed(1)}%)</p>
                        <p>Sc: {data.S.c} ({(data.S.c / data.total * 100).toFixed(1)}%)</p>
                        <p>Sx: {data.S.x} ({(data.S.x / data.total * 100).toFixed(1)}%)</p>
                        <p>S!: {data.S.noSafety} ({(data.S.noSafety / data.total * 100).toFixed(1)}%)</p>
                        <p>Sf: {data.S.f} ({(data.S.f / data.total * 100).toFixed(1)}%)</p>
                        <p>Sq: {data.S.q} ({(data.S.q / data.total * 100).toFixed(1)}%)</p>
                        <p>-no-apples: {data.other.noApples} ({(data.other.noApples / data.total * 100).toFixed(1)}%)</p>
                        <p>-no-sirens: {data.other.noSirens} ({(data.other.noSirens / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>B Flag (Bosses)</h2>
                        <p>None: {data.B[0]} ({(data.B[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>B (By itself): {data.B[1]} ({(data.B[1] / data.total * 100).toFixed(1)}%)</p>
                        <p>B!: {data.B.noSafety} ({(data.B.noSafety / data.total * 100).toFixed(1)}%)</p>
                        <p>-whyburn: {data.W.whyBurn} ({(data.W.whyBurn / data.total * 100).toFixed(1)}%)</p>
                        <p>-whichburn: {data.W.whichBurn} ({(data.W.whichBurn / data.total * 100).toFixed(1)}%)</p>
                        <p>MEGANUKE: {data.W.alwaysBurn} ({(data.W.alwaysBurn / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>N/F Flags (Challenges)</h2>
                        <p>No F: {data.F[0]} ({(data.F[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>F: {data.F[1]} ({(data.F[1] / data.total * 100).toFixed(1)}%)</p>
                        <p>Free Lunch: {data.N[0]} ({(data.N[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>Nc: {data.N.c} ({(data.N.c / data.total * 100).toFixed(1)}%)</p>
                        <p>Nk: {data.N.k} ({(data.N.k / data.total * 100).toFixed(1)}%)</p>
                        <p>Nb: {data.N.b} ({(data.N.b / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>E Flag (Encounters)</h2>
                        <p>None: {data.E[0]} ({(data.E[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>Et: {data.E.t} ({(data.E.t / data.total * 100).toFixed(1)}%)</p>
                        <p>Er: {data.E.r} ({(data.E.r / data.total * 100).toFixed(1)}%)</p>
                        <p>Ex: {data.E.x} ({(data.E.x / data.total * 100).toFixed(1)}%)</p>
                        <p>Ef: {data.E.f} ({(data.E.f / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>X Flag (Experience)</h2>
                        <p>None: {data.X[0]} ({(data.X[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>Xs: {data.X.s} ({(data.X.s / data.total * 100).toFixed(1)}%)</p>
                        <p>Xk: {data.X.k} ({(data.X.k / data.total * 100).toFixed(1)}%)</p>
                        <p>Xb: {data.X.b} ({(data.X.b / data.total * 100).toFixed(1)}%)</p>
                        <p>Xx: {data.X.x} ({(data.X.x / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>G Flag (Glitches)</h2>
                        <p>None: {data.G[0]} ({(data.G[0] / data.total * 100).toFixed(1)}%)</p>
                        <p>Gd: {data.G.d} ({(data.G.d / data.total * 100).toFixed(1)}%)</p>
                        <p>Gm: {data.G.m} ({(data.G.m / data.total * 100).toFixed(1)}%)</p>
                        <p>Gl: {data.G.l} ({(data.G.l / data.total * 100).toFixed(1)}%)</p>
                        <p>Gw: {data.G.w} ({(data.G.w / data.total * 100).toFixed(1)}%)</p>
                        <p>G64: {data.G[64]} ({(data.G[64] / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                    <Col md="4" className="mb-4">
                      <div className="text-center">
                        <h2>Others</h2>
                        <p>-aa: {data.other.aa} ({(data.other.aa / data.total * 100).toFixed(1)}%)</p>
                        <p>-no-adamants: {data.other.noAdamants} ({(data.other.noAdamants / data.total * 100).toFixed(1)}%)</p>
                        <p>-spoon: {data.other.spoon} ({(data.other.spoon / data.total * 100).toFixed(1)}%)</p>
                        <p>-fab: {data.other.fab} ({(data.other.fab / data.total * 100).toFixed(1)}%)</p>
                        <p>-huh: {data.other.huh} ({(data.other.huh / data.total * 100).toFixed(1)}%)</p>
                        <p>-vintage: {data.other.vintage} ({(data.other.vintage / data.total * 100).toFixed(1)}%)</p>
                        <p>-z: {data.other.z} ({(data.other.z / data.total * 100).toFixed(1)}%)</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            )}
            
          </div>
        );
      }}
    </ReduxMainData>
  );
}

export default v3FlagStats;
