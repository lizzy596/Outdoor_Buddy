import { START_LOADING, END_LOADING, GET_WEATHER, GET_CACHE, ZIPCODE_ERROR } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getWeatherData = (zipcode) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.getWeather(zipcode);
      
      dispatch({ type: GET_WEATHER, payload: { data } });
      dispatch({ type: END_LOADING });
    } catch (err) {
      dispatch({ type: ZIPCODE_ERROR, payload: err.response.status });
      dispatch({ type: START_LOADING });
      const { data } = await api.getCacheWeather();
      dispatch({ type: GET_CACHE, payload: { data  }  });
      dispatch({ type: END_LOADING });
    
    }
  };


  export const getCache = () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.getCacheWeather();
      
      dispatch({ type: GET_CACHE, payload: { data  }  });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };