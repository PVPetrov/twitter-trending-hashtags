import axios from 'axios';

export const getHashtags = async (countries) => {
  return await axios.get('/trending/', {
    params: {
      countries
    }
  })
}