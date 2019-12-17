import { DATA_START_LOADING, DATA_DONE_LOADING, BOT_DATA_ERROR, DATA_DONE_LOADING_RACER, DATA_DONE_LOADING_SINGLE_RACE, DATA_DONE_LOADING_ALL_RACERS, DATA_DONE_LOADING_FEATURED_RACERS, RESET_BOT_DATA } from '../actions/types';

const INITIAL_STATE = { data: null, loading: false, error: null, racerData: null, singleRaceData: null, allRacerData: null, featuredRacers: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOT_DATA_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case DATA_START_LOADING:
      return { ...state, loading: true };
    case DATA_DONE_LOADING:
      return { ...state, loading: false, data: action.payload.data, error: null };
    case DATA_DONE_LOADING_RACER: {
      return { ...state, loading: false, racerData: action.payload.data, error: null};
    }
    case DATA_DONE_LOADING_SINGLE_RACE: 
      return { ...state, loading: false, singleRaceData: action.payload.data, error: null};
    case DATA_DONE_LOADING_ALL_RACERS:
      return { ...state, loading: false, allRacerData: action.payload.data, error: null};
    case DATA_DONE_LOADING_FEATURED_RACERS:
      return { ...state, loading: false, featuredRacers: action.payload.data, error: null };
    case RESET_BOT_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
}
