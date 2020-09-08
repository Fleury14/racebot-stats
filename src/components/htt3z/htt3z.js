import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Navbar } from '../../components';

import { ReduxRacerData, ReduxMainData } from '../redux-data';
import GroupData from '../../data/zz3groups';

import './htt3z.scss';
import { parse3Zgroups } from '../../helpers/parse3Z';

class Htt3z extends Component {
  findPlayer(racerData, id) {
    if (!racerData || !id) return null;
    const foundRacer = racerData.find(racer => racer.id === id);
    return foundRacer;
  }

  render() {
    console.log(GroupData);
    return (
      <ReduxMainData>
        {(reduxMainData) => {
          console.log('main data', reduxMainData);
          return (
            <ReduxRacerData>
              {(reduxData => {
                // console.log('racerdata', racerData);
                const racerData =  reduxData.racerData ? reduxData.racerData.items : null;
                const parsedGroups = null;
                if (reduxMainData.botData && reduxMainData.botData.items) parse3Zgroups(reduxMainData.botData.items, GroupData);
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
                        <h3 className="zz-group-title">{group.group}</h3>
                        <Table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Wins</th>
                              <th>Losses</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.members.map(player => {
                              const name = isNaN(parseInt(player)) ? player : this.findPlayer(racerData, player).name;
                              return (
                                <tr key={name}>
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
        }}
      
      </ReduxMainData>
    );
  }
}

export default Htt3z;
