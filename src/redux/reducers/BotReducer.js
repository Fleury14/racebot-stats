import { DATA_START_LOADING, DATA_DONE_LOADING, BOT_DATA_ERROR } from '../actions/types';

const INITIAL_STATE = { data: null, loading: false, error: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOT_DATA_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case DATA_START_LOADING:
      return { ...state, loading: true };
    case DATA_DONE_LOADING:
      return { ...state, loading: false, data: action.payload.data, error: null };

    default:
      return state;
  }
}
