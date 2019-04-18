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
  return (dispatch) => {
    console.log('apikey', process.env.REACT_APP_RACEBOT_APIKEY);
    dispatch(loadStart());
    axios.get('http://ec2-52-15-172-83.us-east-2.compute.amazonaws.com:8080/races?pageSize=1000', { headers: { apikey: process.env.REACT_APP_RACEBOT_APIKEY } })
    .then(response => {
      dispatch(loadFinish(response.data));
    })
    .catch(err => {
      dispatch(loadError(err));
    });
  }

}
