import axios from 'axios'

const customInstance = axios.create ({
  baseURL : '/api/',
  headers: {'Accept': 'application/json'}
})

export default customInstance;