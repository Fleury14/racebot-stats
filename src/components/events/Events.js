import React, { Component } from 'react';
import { ReduxEventsData } from '../redux-data';

class EventsComponent extends Component {
  render() {
    return (
      <ReduxEventsData>
        {(eventData) => {
          return (
            <h1>eventzz</h1>
          );
        }}
      </ReduxEventsData>
    );
  }
}

export default EventsComponent;