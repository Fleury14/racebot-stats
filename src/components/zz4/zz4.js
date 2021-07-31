import React, { Component } from 'react';
import { Navbar } from '..';
import { ReduxMainData } from '../redux-data';
import { parseZZ4 } from '../../helpers';

class ZZ4 extends Component {
  render() {
    return (
      <>
      <Navbar />
      <ReduxMainData>
        {(reduxData) => {
          const zz4Data = parseZZ4(reduxData.botData);
          console.log('zz4', zz4Data)
          console.log('loading?', reduxData.loading)
          return (
            <h1>Imma zz4</h1>
          );
        }}
      </ReduxMainData>
      
      </>
    )
  }
}

export default ZZ4;