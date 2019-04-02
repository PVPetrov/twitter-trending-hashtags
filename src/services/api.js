import axios from 'axios';

export const getHashtags = async (countries) => {
  return axios.get('/trending/', {
    params: {
      countries
    }
  })
}