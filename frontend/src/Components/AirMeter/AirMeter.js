import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Gauge5 from './Gauge5'






const AirMeter = () => {


  let text;
  let gauge;

const { forecast } = useSelector((state) => state.weather);
//const [desc, setDesc] = useState(forecast.DailyForecasts[0].AirAndPollen[0].Category)
//const [value, setValue] = useState(0)
const [scale, setScale] = useState(forecast.AirAndPollen[0].Value)
const [desc, setDesc] = useState(forecast.AirAndPollen[0].Category)
//const [value, setValue] = useState(forecast.DailyForecasts[0].AirAndPollen[0].Category)
const [value, setValue] = useState(0)
const [advisory, setAdvisory] = useState('')


const calcScale = (scale) => {
  if(scale <= 50) {
    return gauge = 0
    
  }
  else if (scale > 50 && scale <= 100) {
    return gauge = 25
    
  }
  else if (scale > 100 && scale <= 150 ) {
    return gauge = 35
    
  }
  else if (scale > 150 && scale <= 200 ) {
    return gauge = 50
    
  }
  else if (scale > 200 && scale <= 300 ) {
    return gauge = 75
    
  }

  else if (scale > 300 ) {
    return gauge = 100
    
  }
}


const calcText = (scale) => {
  if(scale <= 50) {
    return text = 'Air pollution poses little risk'
    
  }
  else if (scale > 50 && scale <= 100) {
    return text = 'Highly sensitive people at risk'
    
  }
  else if (scale > 100 && scale <= 150 ) {
    return text = 'Sensitive groups at risk'
    
  }
  else if (scale > 150 && scale <= 200 ) {
    return text = 'Reduce prolonged exertion outdoors'
    
  }
  else if (scale > 200 && scale <= 300 ) {
    return text = 'Avoid prolonged exertion outdoors'
    
  }

  else if (scale > 300 ) {
    return text = 'Avoid prolonged exertion outdoors'
    
  }
}













  

const calcAdvisory = (desc) => {
    switch (desc) {
      case 'Good':
        text = 'Air pollution poses little risk'
        break;
  
      case 'Moderate':
        text = 'Highly sensitive people at risk'
        break;
  
       case 'Unhealthy sensitive':
        text = 'Sensitive groups at risk'
        break;

        case 'Unhealthy':
        text = 'Reduce prolonged exertion outdoors'
        break;
  
        case 'Very unhealthy':
        text = 'Avoid prolonged exertion outdoors'
        break;
              
        case 'Hazardous':
        text = 'Avoid prolonged exertion outdoors'
        break;
               
        default:
        break;
    }
  
    return text
    }



useEffect(() => {
setValue(calcScale(scale))
setAdvisory(calcText(scale))
}, [])





 const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={0} style={{backgroundColor: 'rgba(255, 0, 0, 0)'}}>
      <Typography variant="h5" className={classes.title} style={{fontWeight: 'bold'}}>Air Quality</Typography>
        <Gauge5 value={value} label={desc} advisory={advisory} color1="#FFD580" color2="#FF5F1F"/>
       
    </Paper>
  )
}

export default AirMeter