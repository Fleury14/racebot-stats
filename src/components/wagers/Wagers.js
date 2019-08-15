import React, { Component } from 'react';
import { Navbar } from '..';
import { ReduxMainData } from '../redux-data';
import { ParseWagers } from '../../helpers';

class Wagers extends Component {
  state = {
    data: null,
    error: null,
    loading: false
  }
  
  render() {
    // console.log('proppys', this.props);
    // console.log('stizzate', this.state);
    return (
      <div>
        <Navbar />
        <ReduxMainData>
          {(reduxData) => {
            const wageData = ParseWagers(reduxData.botData);
            console.log('wageData', wageData);
          }}
        </ReduxMainData>
        <h1>Wagers</h1>
      </div>
    );
  }
  
}

export default Wagers;