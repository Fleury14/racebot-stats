import { combineReducers } from 'redux';
import TempReducer from './TempReducer';
import BotReducer from './BotReducer';
import SirenReducer  from './sirenReducer';

export default combineReducers({
  temp: TempReducer,
  botData: BotReducer,
  siren: SirenReducer,
});