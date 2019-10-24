import { combineReducers } from 'redux';
import text from './textReducer';

const reducers = combineReducers({ text });

export default reducers;