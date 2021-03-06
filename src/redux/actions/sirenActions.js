import { DATA_SIREN_ERROR, DATA_START_SIREN_LOADING, DATA_DONE_LOADING_SIREN_RACERS, DATA_DONE_LOADING_SIREN_RACES } from  '../actions/types';
import axios from 'axios';

const loadStart = () => ({
  type: DATA_START_SIREN_LOADING
});

const loadFinish = (data, key, type) => ({
  type,
  payload: {
    [key]: data
  }
});

const loadError = error => ({
  type: DATA_SIREN_ERROR,
  payload: {
    error
  }
});

const sirenUrl = 'http://zoevee.net:5000/siren/api';

const getEntrants = () => {
  return (dispatch) => {
    dispatch(loadStart());
    axios.get(`${sirenUrl}/entrants`)
      .then(response => {
        console.log('response', response);
        dispatch(loadFinish(response, 'entrants', DATA_DONE_LOADING_SIREN_RACERS));
      })
      .catch(err => {
        dispatch(loadError(err))
      })
  }
}