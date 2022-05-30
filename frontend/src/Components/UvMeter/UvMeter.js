import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';



import Gauge6 from './Gauge6'






const UvMeter = () => {


  const { forecast } = useSelector((state) => state.weather);


 
let text;
let gauge;


const [desc, setDesc] = useState(forecast.AirAndPollen[5].Category)
//const [value, setValue] = useState(forecast.DailyForecasts[0].AirAndPollen[5].Category)
const [value, setValue] = useState(0)
const [advisory, setAdvisory] = useState('')

const calcValue = (desc) => {
    switch (desc) {
      case 'Low':
        gauge = 0
        break;
  
      case 'Moderate':
        gauge = 25
        break;
  
       case 'High':
        gauge = 50
        break;
  
        case 'Very High':
          gauge = 75
        break;
              
       
               
        default:
        break;
    }
  
    return  gauge
    } 




  /*  const calcDesc = (desc) => {
      switch (desc) {
        case 'Low':
          desc = 'Low'
          break;
    
        case 'Moderate':
          desc = 'Medium'
          break;
    
         case 'High':
          desc = 'High'
          break;
    
          case 'Very High':
          desc = 'Very High'
          break;
                
         
                 
          default:
          break;
      }
    
      return desc
      } */

  const giveAdvisory = (desc) => {
 
   

    if(desc === 'Low') {
      text = 'Enjoy Safely'
    }
    else if(desc === 'Moderate') {
      text = '30SPF+, seek shade 10am-4pm'
    }
    else if(desc === 'Medium') {
      text = '30SPF+, seek shade 10am-4pm'
    }
    else if(desc === 'High') {
      text = '30SPF+, reduce 10am-4pm sun exposure'
    }
    else if(desc === 'Very High') {
      text =  '30SPF+, avoid 10am-4pm sun exposure'
    }


    return text
  }
     


     /* const calcAdvisory = (desc) => {
        switch (desc) {
          case 'Low':
            advisory = 'Enjoy Safely'
            break;
      
          case 'Moderate':
            advisory = '30SPF+, seek midday (10am-4pm) shade'
            break;

        case 'Medium':
            advisory = '30SPF+, seek midday (10am-4pm) shade'
            break;
      
           case 'High':
            advisory = '30SPF+, reduce midday (10am-4pm) sun exposure'
            break;
      
            case 'Very High':
              advisory = '30SPF+, avoid midday (10am-4pm) sun exposure'
            break;
                  
           
                   
            default:
            break;
        }
      
        return advisory
        } */







useEffect(() => {
setValue(calcValue(desc))
//setDesc(calcDesc(desc))
setAdvisory(giveAdvisory(desc))



}, [])



 const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={0} style={{backgroundColor: 'rgba(255, 0, 0, 0)'}}>
      <Typography variant="h5" className={classes.title} style={{fontWeight: 'bold'}}>UV Index</Typography>
        <Gauge6 value={value} label={desc} advisory={advisory} />
        
    </Paper>
  )
}

export default UvMeter