import axios from 'axios'

axios.defaults.withCredentials=true;

export default () => {
  return axios.create({
    baseURL: `http://192.168.2.102:8080/index`
    // baseURL:`http://47.104.27.184:8081/index`
  })
}
