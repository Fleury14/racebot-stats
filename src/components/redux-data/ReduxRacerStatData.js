import React from 'react';
import ReduxMainData from './ReduxMainData';
import ReduxSingleRacerData from './ReduxSingleRacerData';

// NOTE: Expects prop "racername"

const ReduxRacerStateData = (props) => {
  return (
    <React.Fragment>
      <ReduxMainData>
        {(generalData) => {
          return (
            <ReduxSingleRacerData racerName={props.racerName}>
              {(racerData) => {
                if (racerData && generalData) {
                  return (
                    <React.Fragment>
                      {props.children({ generalRedux: generalData, racerRedux: racerData, loading: racerData.loading || generalData.loading })}
                    </React.Fragment>
                  );
                }
              }}
            </ReduxSingleRacerData>
          );
        }}
      </ReduxMainData>
    </React.Fragment>
  );
}

export default ReduxRacerStateData;