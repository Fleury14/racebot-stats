import { DATA_SIREN_ERROR, DATA_START_SIREN_LOADING, DATA_DONE_LOADING_SIREN_RACERS, DATA_DONE_LOADING_SIREN_RACES } from '../actions/types';

const INITIAL_STATE = { entrants: null, races: null, loading: false, error: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_SIREN_ERROR:
      return { ...state, error: action.payload.error };
    case DATA_START_SIREN_LOADING:
      return { ...state, loading: true };
    case DATA_DONE_LOADING_SIREN_RACERS:
      return { ...state, entrants: action.payload.entrants, loading: false }
    case DATA_DONE_LOADING_SIREN_RACES:
      return { ...state, entrants: action.payload.races, loading: false }
    default:
      return state;
  }
}