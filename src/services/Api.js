import axios from 'axios'

axios.defaults.withCredentials=true;

export default () => {
  return axios.create({
    baseURL: `http://192.168.1.175:8080/index`
  })
}
