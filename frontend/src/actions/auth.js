import { AUTH, SET_ERROR } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { getWeatherData } from './weather';



export const signin = (formData, navigate) => async (dispatch) => {
  
 try {
    const { data } = await api.signIn(formData);
    
 

   await dispatch({ type: AUTH, data });
   await  dispatch(getWeatherData(data.result.zipcode))

    navigate('/');

  } catch (err) {
    
    dispatch({ type: SET_ERROR, payload: err.response })
    
  }
}; 


export const signup = (formData, navigate) => async (dispatch) => {
  
  try {

    const { data } = await api.signUp(formData)
    
   
    
   

    await dispatch({ type: AUTH, data });
    await  dispatch(getWeatherData(data.result.zipcode))

  

    navigate('/')
  } catch (err) {

   // console.log(err.response.data.msg)
   console.log(err.response.status)
   
    dispatch({ type: SET_ERROR, payload: err.response});
  }
}; 









  
    
  



   
