import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import AppRouter from './router/AppRouter';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
