import * as c from '../constants';

const initState = {
  err: false,
  data: ''
}

export default (state = initState, { type, data }) => {
  switch(type){
    case c.GET_HASHTAGS_ERROR:
      return {...state, 
        err: true,
        data
      };
    case c.DISMISS_ERROR:
      return initState;
    default:
      return state;
  }
}