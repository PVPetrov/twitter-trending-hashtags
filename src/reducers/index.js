import { combineReducers } from 'redux';
import stats from './stats';
import errors from './errors';

export default combineReducers({
    stats,
    errors
})