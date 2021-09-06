import { DATA_SIREN_ERROR, DATA_DONE_LOADING_ZZ4, DATA_START_SIREN_LOADING, DATA_DONE_LOADING_SIREN_RACERS, DATA_DONE_LOADING_SIREN_RACES } from  '../actions/types';
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

export const getEntrants = () => {
  return (dispatch) => {
    dispatch(loadStart());
    axios.get(`${sirenUrl}/entrants`, { headers: { 
      
     } })
      .then(response => {
        dispatch(loadFinish(response.data, 'entrants', DATA_DONE_LOADING_SIREN_RACERS));
      })
      .catch(err => {
        dispatch(loadError(err))
      })
  }
}

export const getRaces = () => {
  return (dispatch) => {
    dispatch(loadStart());
    axios.get(`${sirenUrl}/matches`)
      .then(response => {
        dispatch(loadFinish(response.data, 'races', DATA_DONE_LOADING_SIREN_RACES))
      })
      .catch(err => {
        dispatch(loadError(err))
      })
  }
}

export const getZz4Races = () => {
  return (dispatch) => {
    dispatch(loadStart());
    axios.get(`${sirenUrl}/zz4/matches`)
      .then(response => {
        dispatch(loadFinish(response.data, 'zz4', DATA_DONE_LOADING_ZZ4))
      })
      .catch(err => {
        dispatch(loadError(err))
      })
  }
}