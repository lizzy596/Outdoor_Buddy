import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { Container, Paper, Typography } from '@mui/material';

import Gauge4 from './Gauge4'






const PollenMeter2 = ({item, number}) => {

 

//const [desc, setDesc] = useState('very high')
//const [value, setValue] = useState('very high')

const [yellow1, setYellow1] = useState("#DFFF00")
const [yellow2, setYellow2] = useState("#FFC000")
const [green1, setGreen1] = useState("#AAFF00")
const [green2, setGreen2] = useState("#4CBB17")





const [cValue, setCValue] = useState(0)

const calcValue = (value) => {
    switch (item.Category) {
      case 'Low':
        value = 0
        break;
  
      case 'Moderate':
        value = 25
        break;
  
       case 'High':
        value = 50
        break;
  
        case 'Very high':
        value = 75
        break;
              
        case 'Extreme':
        value = 100
        break;
               
        default:
        break;
    }
  
    return value
    }


useEffect(() => {
setCValue(calcValue(item.Category))
}, [])



 const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={0} style={{backgroundColor: 'rgba(255, 0, 0, 0)'}} >
      <Typography variant="h4" className={classes.title}><span className={classes.bold}>{item.Name}</span></Typography>
      <Gauge4 value={cValue} label={item.Category} id={number} color1={green1} color2={green2}/>
        
    </Paper>
  )
}

export default PollenMeter2