import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ReduxMainData } from '../redux-data';
import { parseFlagStatsv4 } from '../../helpers';
import { LoadingModal } from '..';
import './FlagStats.scss';

const v4FlagStats = (props) => {
  return (
    <ReduxMainData>
      {(reduxData) => {
        // const data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        const data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        const loading = reduxData.loading;
        console.log('dayta', data);
        return (
          <div>
            {loading && <LoadingModal />}
            {data && !loading &&  (
              <div className="flag-stats-container open-sans">
                <div className="flag-stats-body p-5">
                  <h1 className="text-center">Flag statsv4</h1>
                  <p className="text-center mb-5">Races recorded: {data.total}</p>
                  <Container>
                    <Row>
                      <Col md="4" className="mb-4">
                        <div className="text-center">
                          <h2>O Flag (Objectives)</h2>
                          <p>Classic Forge: {data.O.classicForge} ({(data.O.classicForge / data.total * 100).toFixed(1)}%)</p>
                          <p>Classic Giant: {data.O.classicGiant} ({(data.O.classicGiant / data.total * 100).toFixed(1)}%)</p>
                          <p>Fiends%: {data.O.fiends} ({(data.O.fiends / data.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">Dark Matter Hunt: {data.O.dkMatter} ({(data.O.dkMatter / data.total * 100).toFixed(1)}%)</p>
                          <h3>Custom Objectives</h3>
                          <p>Times a custom objective was added: {data.O.custom.total} ({(data.O.custom.total / data.total * 100).toFixed(1)}%)</p>
                          <p>Of those races, the following was selected as an objective:</p>
                          <p>Character: {data.O.custom.character} ({(data.O.custom.character / data.O.custom.total * 100).toFixed(1)}%)</p>
                          <p>Boss Hunt: {data.O.custom.boss} ({(data.O.custom.boss / data.O.custom.total * 100).toFixed(1)}%)</p>
                          <p className="mb-3">Quest: {data.O.custom.quest} ({(data.O.custom.quest / data.O.custom.total * 100).toFixed(1)}%)</p>
                          <h3>Random Objectives</h3>
                          <p># of Objectives added:</p>
                          <p>1: {data.O.random[1]} ({(data.O.random[1] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[2]} ({(data.O.random[2] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[3]} ({(data.O.random[3] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[4]} ({(data.O.random[4] / data.total * 100).toFixed(1)}%)</p>
                          <p>1: {data.O.random[5]} ({(data.O.random[5] / data.total * 100).toFixed(1)}%)</p>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="text-center">
                          <h2>C-Flag (Characters)</h2>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="text-center mb-4">
                          <h2>K Flag (Key Items)</h2>
                          <p>Vanilla: {data.K.vanilla} ({(data.K.vanilla / data.total * 100).toFixed(1)}%)</p>
                          <p>Main: {data.K.main} ({(data.K.main / data.total * 100).toFixed(1)}%)</p>
                          <p>Summon: {data.K.summon} ({(data.K.summon / data.total * 100).toFixed(1)}%)</p>
                          <p>Moon: {data.K.moon} ({(data.K.moon / data.total * 100).toFixed(1)}%)</p>
                          <p>Trapped Chests: {data.K.trap} ({(data.K.trap / data.total * 100).toFixed(1)}%)</p>
                          <p>Safetys Off: {data.K.unsafe} ({(data.K.unsafe / data.total * 100).toFixed(1)}%)</p>
                        </div>
                        <div className="text-center mb-4">
                          
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

export default v4FlagStats;
