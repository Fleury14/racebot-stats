import React, { Component } from 'react';
import { Navbar} from '..';
import { parseAC } from '../../helpers';
import './ac.scss';

class AC extends Component {
  componentDidMount() {
    const acData = parseAC();
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Ac</h1>
      </div>
      
    );
  }
}

export default AC;