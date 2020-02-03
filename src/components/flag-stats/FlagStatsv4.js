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
        const data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        // const v4data = parseFlagStatsv4(reduxData.botData ? reduxData.botData.items : null);
        const loading = reduxData.loading;
        return (
          <div>
            {loading && <LoadingModal />}
            {data && !loading &&  (
              <div className="flag-stats-container open-sans">
              <div className="flag-stats-body p-5">
              <h1 className="text-center">Flag statsv4</h1>
              <p className="text-center mb-5">Races recorded: {data.total}</p>
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
