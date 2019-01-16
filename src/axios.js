import axios from 'axios';

//default axios를 여러가지 파일로 설정하여 사용가능
const instance = axios.create({
  baseURL : 'http://jsonplaceholder.typicode.com'

});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
export default instance;