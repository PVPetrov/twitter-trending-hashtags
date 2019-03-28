import * as c from '../constants';

const initState = {
  error: false,
  mssg: ''
}

export default (state = initState, {type, data}) => {
  switch(type){
    case c.GET_HASHTAGS_ERROR:
      return {...state,
        error: true, 
        mssg: data
      };
    default:
      return state;
  }
}