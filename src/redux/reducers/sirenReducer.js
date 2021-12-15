import { DATA_SIREN_ERROR, DATA_START_SIREN_LOADING, DATA_DONE_LOADING_SIREN_RACERS, DATA_DONE_LOADING_SIREN_RACES, DATA_DONE_LOADING_ZZ4 } from '../actions/types';

const INITIAL_STATE = { entrants: null, races: null, loading: false, error: null, zz4: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_SIREN_ERROR:
      return { ...state, error: action.payload.error };
    case DATA_START_SIREN_LOADING:
      return { ...state, loading: true };
    case DATA_DONE_LOADING_SIREN_RACERS:
      return { ...state, entrants: action.payload.entrants, loading: false }
    case DATA_DONE_LOADING_SIREN_RACES:
      return { ...state, races: action.payload.races, loading: false };
    case DATA_DONE_LOADING_ZZ4:
      return { ...state, zz4: action.payload.zz4, loading: false }
    default:
      return state;
  }
}