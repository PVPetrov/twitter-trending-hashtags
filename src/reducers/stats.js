// Purchases reducer
import { combineReducers } from 'redux';
import * as c from '../constants';
import { data as  hashtagData } from '../utils/countries';


const data = (state = hashtagData, {type, data}) => {
  switch(type){
    case c.GET_HASHTAGS_SECCESS:
      return data;
    default:
      return state;
  }
}

const loading = (state = false, {type}) => {
  switch(type){
    case c.GET_HASHTAGS:
      return true;
    case c.GET_HASHTAGS_SECCESS:
    case c.GET_HASHTAGS_ERROR:
      return false;
    default:
      return state;
  }
}

export default combineReducers({data, loading});