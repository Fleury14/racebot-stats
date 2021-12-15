import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './zz4.scss';

class ZZ4Row extends Component {
  state = {
    open: false,
  }

  toggleOpen() {
    this.setState(prevState => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    const { id, name, races, average, scores } = this.props.racer;
    const { index } = this.props;
    return (
      <Row key={id} className="zz4-row" onClick={() => this.toggleOpen()}>
        <Col>
          <p className="zz4-rank">{index + 1}</p>
        </Col>
        <Col>
          {name}
        </Col>
        <Col>
          {races}
        </Col>
        <Col>
          {average}
        </Col>
        {this.state.open && (
          <Col sm="12" className="zz4-details">
            {scores.map(score => {
              return (
                <div key={score.race}>
                  <p>Race: {score.race} Score: {score.score}</p>
                </div>
              );
            })}
          </Col>
        )}
      </Row>
    )
  }
}

export default ZZ4Row;