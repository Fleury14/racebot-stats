import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Navbar} from '..';
import { parseAC } from '../../helpers';
import './ac.scss';

class AC extends Component {
  componentDidMount() {
    
  }

  render() {
    const acData = parseAC();
    console.log('ac data', acData);
    return (
      <div className="ac-page">
        <Navbar />
        <h1 className='ac-title'>Adamant Cup</h1>
        <Container>
          <Row>
            {acData ? acData.map(group => {
              group.players.sort((a, b) => a.wins === b.wins ? a.losses - b.losses : b.wins - a.wins);
              return (
                <Col md="6">
                  <div className='ac-group-container'>
                    <div className='ac-group-title'>
                      <h2>{group.title}</h2>
                      <img src={`images/${group.image}`} alt="" />
                    </div>
                    
                    {group.players.map((player, index) => {
                      return (
                        <div className={`d-flex justify-content-between align-items-center ac-row ${index === 0 ? 'ac-first' : ''}${index === 1 || index === 2 ? 'ac-playin' : ''}`}>
                          <p>{player.name}</p>
                          <p>{player.wins}-{player.losses}</p>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              );
            }) : null}
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default AC;