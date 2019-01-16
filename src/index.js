import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(req => {
  console.log(req);
  //Edit request config
  return req;
}, error => {
  console.log(error)
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  console.log(res);
  return res;
}, error => {
  console.log(error);
  return Promise.reject(error);
})
// Removing Interceptors
// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
