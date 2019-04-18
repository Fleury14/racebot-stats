import { DATA_START_LOADING, DATA_DONE_LOADING, BOT_DATA_ERROR } from './types';
import axios from 'axios';

const loadStart = () => ({
  type: DATA_START_LOADING
});

const loadFinish = data => ({
  type: DATA_DONE_LOADING,
  payload: {
    data,
  }
});

const loadError = error => ({
  type: BOT_DATA_ERROR,
  payload: {
    error,
  }
});


export const getBotData = () => {
  console.log('getting bot data...');
  return (dispatch) => {
    console.log('apikey', process.env.REACT_APP_RACEBOT_APIKEY);
    dispatch(loadStart());
    console.log('started load, now getting...');
    axios.get('http://ec2-52-15-172-83.us-east-2.compute.amazonaws.com:8080/races?pageSize=1000', { headers: { apikey: process.env.REACT_APP_RACEBOT_APIKEY } })
    .then(response => {
      console.log('response', response);
      dispatch(loadFinish(response.data));
    })
    .catch(err => {
      dispatch(loadError(err));
    });
  }

}
