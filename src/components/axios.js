import axios from 'axios'

const customInstance = axios.create ({
  baseURL : process.env.REACT_APP_BACKEND_URL + '/api/',
  headers: {'Accept': 'application/json'}
})

export default customInstance;