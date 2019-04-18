import { combineReducers } from 'redux';
import TempReducer from './TempReducer';
import BotReducer from './BotReducer';

export default combineReducers({
  temp: TempReducer,
  botData: BotReducer,
});