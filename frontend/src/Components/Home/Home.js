import React, { useEffect, useState } from 'react'
import { Container, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import Day from '../../assets/daytime.jpg';
import Night from '../../assets/nightsky.jpg';
import Weather from '../Weather/Weather'
import MeterBox from '../MeterBox/MeterBox'
import AllergenBox2 from '../AllergenBox2/AllergenBox2'
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData, getCache } from '../../actions/weather';








const Home = () => {


  const [show, setShow] = useState(false)
  
 const { weather, location, forecast, isLoading, } = useSelector((state) => state.weather);

 const { authData } = useSelector((state) => state.auth);
 


 const user = JSON.parse(localStorage.getItem('profile'))

 const startKey = JSON.parse(sessionStorage.getItem('startKey'))

 

const classes = useStyles()
const dispatch = useDispatch()


useEffect(() => {
  
  if(user && !startKey) {
    console.log('pulling from API, due to local storage')

    
   dispatch(getWeatherData(user.result.zipcode))
   return
  }
  
  
  
  if(startKey) {
    console.log('pulling from storage')
    dispatch(getCache())
    return
  } 
  
  if(!user && !startKey){
    console.log('pulled from api')
    dispatch(getWeatherData('78704'))
    return
  }
    
}, []) 










if (isLoading) {
  return (
    <Paper elevation={0} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>
  );
}





  return (
    <>
    {weather.IsDayTime ? <Container  maxWidth={false} className={classes.container} style={{ backgroundImage:`url(${Day})`}}>
      <div className={classes.weatherBox} >
      { user && <Typography variant="h6" className={classes.date}>Welcome,<span className={classes.bold}> {user.result.username}!</span></Typography>}
        <Weather />
        </div>
        <div className={classes.allergyBox} >
        
      <AllergenBox2 /> 
      
        
        </div>
     </Container> :



     <Container maxWidth={false} className={classes.container} style={{ height: 1356, backgroundImage:`url(${Night})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
     <div className={classes.weatherBox}>
      
      <Weather />
      </div>
     </Container>}
    </>
  )
}

export default Home