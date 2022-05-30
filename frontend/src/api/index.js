import axios from 'axios';

//const API = axios.create({ baseURL: 'http://localhost:3001' });
const API = axios.create({ baseURL: 'https://outdoor-buddy.herokuapp.com/' });




//export const getWeather = (zipcode) => API.get(`/weather/${zipcode}`);
export const getWeather = (zipcode) => API.get(`/weather/?searchQuery=${zipcode}`);
//export const getWeather = (zipcode) => API.get('/weather', zipcode);
export const getCacheWeather = () => API.get(`/weather/start`);
export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData)