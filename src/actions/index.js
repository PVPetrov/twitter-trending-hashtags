import * as c from '../constants';
import * as api from '../services/api.js';

export const getHashtags = (countries) => async dispatch => {
  dispatch({ type: c.GET_HASHTAGS });
  try{
    const { data } = await api.getHashtags(countries);
    console.log(data);
    dispatch({ type: c.GET_HASHTAGS_SECCESS, data});
  } catch(err){
    dispatch({ type: c.GET_HASHTAGS_ERROR, data: err.response.data.error });
  }
}