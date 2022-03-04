import { DATA_START_LOADING, DATA_DONE_LOADING, BOT_DATA_ERROR, DATA_DONE_LOADING_RACER, DATA_DONE_LOADING_SINGLE_RACE, DATA_DONE_LOADING_ALL_RACERS, DATA_DONE_LOADING_FEATURED_RACERS, DATA_DONE_LOADING_EVENTS } from './types';
import axios from 'axios';
import filterFERaces from '../../helpers/FilterFERaces';

const loadStart = () => ({
  type: DATA_START_LOADING
});

const loadFinish = (data, type) => ({
  type,
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

const environment = process.env.NODE_ENV;
const apiUrl = environment === 'development' ? process.env.REACT_APP_RACEBOT_API_URL_DEV : process.env.REACT_APP_RACEBOT_API_URL;
const apiKey = process.env.REACT_APP_RACEBOT_APIKEY;
const apiHeader = 'apikey';

export const getBotData = () => {
  return (dispatch) => {
    dispatch(loadStart());
    axios.get(`${apiUrl}/races?game=ff4fe&pageSize=5000`, { headers: { [apiHeader]: apiKey } })
    .then(response => {
      response.data = filterFERaces(response.data);
      response.data.dataTime = Date.now();
      dispatch(loadFinish(response.data, DATA_DONE_LOADING));
    })
    .catch(err => {
      dispatch(loadError(err));
    });
  }
};

export const getRacerData = (racer) => {
  return (dispatch) => {
    dispatch(loadStart());
      axios.get(`${apiUrl}/users?name=${racer}`, { headers: { [apiHeader]: apiKey } })
      .then(response => {
        // flip history if exists
        // have to have two conditionals for different data formatitting
        // new ver
        // if (Array.isArray(response.data)) {
        //   if (response.data.race_details.races_completed) {
        //     response.data.race_details.races_completed.reverse();
        //   }
        // }
        // oldver
        if (response.data.race_details.races_completed) {
          console.log('response from single racer', response.data);
          // response.data = filterFERaces(response.data);
          response.data.race_details.races_completed.reverse();

        }
        response.data.dataTime = Date.now();
        dispatch(loadFinish(response.data, DATA_DONE_LOADING_RACER));
      })
      .catch(err => {
        console.log('error', err);
        dispatch(loadError(err));
    });
  }
}

export const getRacerDataById = (racerId) => {
  return (dispatch) => {
    dispatch(loadStart());
      axios.get(`${apiUrl}/users/${racerId}`, { headers: { [apiHeader]: apiKey } })
      .then(response => {
        // flip history if exists
        // have to have two conditionals for different data formatitting
        // new ver
        // if (Array.isArray(response.data)) {
        //   if (response.data.race_details.races_completed) {
        //     response.data.race_details.races_completed.reverse();
        //   }
        // }
        // oldver
        if (response.data.race_details.races_completed) {
          // const test = filterFERaces(response.data);
          response.data.race_details.races_completed = response.data.race_details.races_completed.filter(race => race.indexOf('ff4fe') >= 0);
          response.data.race_details.races_completed.reverse();
        }
        response.data.dataTime = Date.now();
        dispatch(loadFinish(response.data, DATA_DONE_LOADING_RACER));
      })
      .catch(err => {
        console.log('error', err);
        dispatch(loadError(err));
    });
  }
}

export const getSingleRaceData = (key) => {
  return (dispatch) => {
    dispatch(loadStart());
      axios.get(`${apiUrl}/races?key=${key}`, { headers: { [apiHeader]: apiKey } })
      .then(response => {
        // sort finishers by placement before sending data
        response.data.finishers.sort((a, b) => a.placement - b.placement);
        response.data.dataTime = Date.now();
        dispatch(loadFinish(response.data, DATA_DONE_LOADING_SINGLE_RACE));
      })
      .catch(err => {
        dispatch(loadError(err));
    });
  }
}

export const getAllRacers = () => {
  return (dispatch) => {
    dispatch(loadStart());
      axios.get(`${apiUrl}/users?pageSize=1000`, { headers: { [apiHeader]: apiKey } })
      .then(response => {
        response.data.dataTime = Date.now();
        dispatch(loadFinish(response.data, DATA_DONE_LOADING_ALL_RACERS));
      })
      .catch(err => {
        dispatch(loadError(err));
    });
  }
}

export const getFeaturedRacers = () => {
  return (dispatch) => {
    dispatch(loadStart());
      axios.get(`${apiUrl}/users/featured`, { headers: { [apiHeader]: apiKey } })
      .then(response => {
        dispatch(loadFinish(response.data, DATA_DONE_LOADING_FEATURED_RACERS));
      })
      .catch(err => {
        dispatch(loadError(err));
    });
  }
}

export const getEvents = () => {
  return (dispatch) => {
    dispatch(loadStart());
      axios.get(`${apiUrl}/events`, { headers: { [apiHeader]: apiKey } })
      .then(response => {
        dispatch(loadFinish(response.data, DATA_DONE_LOADING_EVENTS));
      })
      .catch(err => {
        dispatch(loadError(err));
    });
  }
}