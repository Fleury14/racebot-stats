import React, { Component } from 'react';
import { Navbar, LoadingModal } from '..'
import { ReduxEventsData } from '../redux-data';
import SelectedEvent from './SelectedEvent';
import './Events.scss';

class EventsComponent extends Component {
  state = {
    selectedEvent: null,
    showCompleted: false,
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
          const { selectedEvent, showCompleted } = this.state;
          let runningEvents = [];
          let completedEvents = [];
          let fullSelectedEvent = null;
          let eventList = null;
          if (events && events.items) {
            eventList = events.items;
            fullSelectedEvent = eventList.find(event => event.id === selectedEvent);
            runningEvents = eventList.filter(event => event.status === 'Running');
            completedEvents = eventList.filter(event => event.status === 'Completed');
            runningEvents.sort((a, b) => a.name.localeCompare(b.name));
            completedEvents.sort((a, b) => a.name.localeCompare(b.name));
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
                    <h2>Running Events</h2>
                    <div className="d-flex flex-wrap">
                    
                      {runningEvents.map(event => {
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
                      <h2>Completed Events</h2>
                      {showCompleted ? (
                        <>
                          <div className="d-flex flex-wrap">
                            {completedEvents.map(event => {
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
                          <button onClick={() => this.setState({ showCompleted: false })}>Hide Completed Events</button>
                        </>
                      ) : (
                        <button onClick={() => this.setState({ showCompleted: true })}>Show Completed Events</button>
                      )}
                      
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