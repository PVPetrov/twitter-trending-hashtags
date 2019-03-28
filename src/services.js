import axios from 'axios';

export const getStats = async () => {
  return axios.get("http://localhost:9000/stats")
    .then(response => response.data)
    .catch(err => err);
}