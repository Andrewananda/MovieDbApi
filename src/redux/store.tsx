import {combineReducers} from 'redux';
import appReducer from './reducer';

const appStore = combineReducers({
  appState: appReducer,
});

export type AppState = ReturnType<typeof appStore>;
export default appStore;
