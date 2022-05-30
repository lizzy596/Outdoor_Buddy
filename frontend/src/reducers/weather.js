import { START_LOADING, END_LOADING, GET_WEATHER, GET_CACHE, ZIPCODE_ERROR, END_ZIPCODE_ERROR } from '../constants/actionTypes';

export default (state = { isLoading: true, error: false, message:''  }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_WEATHER:
      sessionStorage.setItem('startKey', JSON.stringify({ ...action.payload.data.startKey }));
      return { ...state, isLoading: true, weather: action.payload.data.weather, location: action.payload.data.location, forecast: action.payload.data.forecast };
    case GET_CACHE:
      return { ...state, isLoading: true, weather: action.payload.data[0].weather[0], location: action.payload.data[0].location[0], forecast: action.payload.data[0].forecast[0].DailyForecasts[0] };
    case ZIPCODE_ERROR:
      return {...state, error: true, message: action.payload };
    case END_ZIPCODE_ERROR: 
      return {...state, error: false }
    

    default:
      return state;
  }
};