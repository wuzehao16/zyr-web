import axios from 'axios';

axios.defaults.withCredentials = true;

export default () => axios.create({
  // baseURL: 'http://192.168.2.101:8080/index',
  baseURL:`http://47.104.27.184:8081/index`
});
