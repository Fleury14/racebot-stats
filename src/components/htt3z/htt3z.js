import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Navbar } from '../../components';

import { ReduxRacerData } from '../redux-data';
import GroupData from '../../data/zz3groups';

import './htt3z.scss';

class Htt3z extends Component {
  findPlayer(racerData, id) {
    if (!racerData || !id) return null;
    const foundRacer = racerData.find(racer => racer.id === id);
    return foundRacer;
  }

  render() {
    console.log(GroupData);
    return (
      <ReduxRacerData>
        {(reduxData => {
          // console.log('racerdata', racerData);
          const racerData =  reduxData.racerData ? reduxData.racerData.items : null;
          if (!racerData) return null;
          return (
          <div>
            <Navbar />
            <h1>HTT3Z</h1>
            <h2>Group Stage</h2>
            <Container>
              <Row>
              {GroupData.map(group => {
              return (
                <Col key={group.group} md="4" className="zz-group">
                  <h3 class="zz-group-title">{group.group}</h3>
                  <Table>
                    <thead>
                      <th>Name</th>
                      <th>Wins</th>
                      <th>Losses</th>
                    </thead>
                    <tbody>
                      {group.members.map(player => {
                        const name = isNaN(parseInt(player)) ? player : this.findPlayer(racerData, player).name;
                        return (
                          <tr>
                            <td>{name}</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  
                </Col>
              )
            })}
              </Row>
            </Container>
            
          </div>
          );
        })}
        
      </ReduxRacerData>
    );
  }
}

export default Htt3z;
