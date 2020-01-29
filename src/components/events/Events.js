import React, { Component } from 'react';
import { Navbar, LoadingModal } from '..'
import { ReduxEventsData } from '../redux-data';
import SelectedEvent from './SelectedEvent';
import './Events.scss';

class EventsComponent extends Component {
  state = {
    selectedEvent: null,
  }

  componentDidMount() {
    const { selectedEvent } = this.state;
    if (this.props.match.params.event && !selectedEvent) {
      this.setState({ selectedEvent: this.props.match.params.event });
    }
  }

  componentDidUpdate() {
    const { selectedEvent } = this.state;
    if (this.props.match.params.event !== selectedEvent) {
      this.setState({ selectedEvent: this.props.match.params.event });
    }
  }

  render() {
    return (
      <ReduxEventsData>
        {(eventData) => {
          const { events, loading } = eventData;
          const { selectedEvent } = this.state;
          let fullSelectedEvent = null;
          let eventList = null;
          if (events && events.items) {
            eventList = events.items;
            fullSelectedEvent = eventList.find(event => event.id === selectedEvent);
          };
          
          return (
            <div>
              <Navbar />
              {loading && <LoadingModal />}
              {!loading && !eventList && (
                <p>There are no events to display</p>
              )}
              {eventList && (
                <div className="event-container">
                  <div className="event-body">
                    <h1>EVENT LIST</h1>
                    <p>Click an event from the list below to see the details</p>
                    <div className="d-flex">
                      {eventList.map(event => {
                        if (event.visibility !== 'private') { 
                          return (
                            <button key={event.id} onClick={() => {
                              this.props.history.push(`/events/${event.id}`);
                              this.setState({ selectedEvent: event.id });
                            }}>{event.name}</button>
                          )
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  {fullSelectedEvent && (
                    <SelectedEvent event={fullSelectedEvent} />
                  )}
                </div>
              )}
            </div>            
          );
        }}
      </ReduxEventsData>
    );
  }
}

export default EventsComponent;