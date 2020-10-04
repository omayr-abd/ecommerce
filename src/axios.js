import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-ecommerce-34bf3.cloudfunctions.net/api' // THE API (cloud function) URL
});

export default instance;

// 'http://localhost:5001/ecommerce-34bf3/us-central1/api'