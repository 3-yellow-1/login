import axios from 'axios';

const jtoken = localStorage.getItem('jtoken');

if (jtoken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${jtoken}`;
}

export default axios;