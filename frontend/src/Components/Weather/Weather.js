import React, { useState, useRef, useEffect} from 'react'
import useStyles from './styles';
import { Container, Paper, Typography, Divider } from '@mui/material';
import Icon1 from '../../assets/icons/1.svg';
import MeterBox from '../MeterBox/MeterBox'
import AirMeter from '../AirMeter/AirMeter'
import UvMeter from '../UvMeter/UvMeter'
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon'

















const Weather = () => {


  

const [icon, showIcon] = useState(false)



const classes = useStyles()
const { weather, location, forecast, isLoading } = useSelector((state) => state.weather);

console.log(forecast.Day.Wind)





return (

    <>
    <div className={classes.wrapper}>
    <Paper className={classes.paper} square elevation={0} style={{color: 'white', backgroundColor: 'rgba(255, 0, 0, 0)'}}>
    <div className={classes.locationDate}>
    
   
    <Typography variant="h2">{location.EnglishName},{location.AdministrativeArea.ID}</Typography> 
  
   
  

    <div className={classes.weatherDesc}>
    <Icon  />
    <Typography variant="h5" style={{marginLeft: '10px'}}>{weather.WeatherText}</Typography>
    </div>

    <div className={classes.wind}>
      <Typography variant="h6" >Wind Direction: {forecast.Day.Wind.Direction.English} </Typography>
      <Typography variant="h6" >Wind Speed: {forecast.Day.Wind.Speed.Value} mi/h </Typography>
    </div>

    
     <div className={classes.box1}>
    <Typography variant="h1">{weather.Temperature.Imperial.Value} &deg;F</Typography>
    <Typography variant="h6">High: {forecast.Temperature.Maximum.Value}&deg;F</Typography>
    <Typography variant="h6">Low: {forecast.Temperature.Minimum.Value}&deg;F</Typography>
    </div>
    </div>

 </Paper>

 

 <Paper className={classes.paper1} square elevation={0} style={{backgroundColor: 'rgba(255, 0, 0, 0)'}}>  

 <AirMeter />
 
 </Paper>



 {weather.IsDayTime && <Paper className={classes.paper1} square elevation={0} style={{backgroundColor: 'rgba(255, 0, 0, 0)'}}>  
<UvMeter />
 
</Paper>}


 </div>






 </>
  )
}

export default Weather