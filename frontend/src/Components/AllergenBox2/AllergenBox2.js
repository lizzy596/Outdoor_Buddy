import React, {useState, useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import { Container,  Typography } from '@mui/material';
import PollenMeter from '../PollenMeter/PollenMeter'
import PollenMeter2 from '../PollenMeter2/PollenMeter2'
import { useDispatch, useSelector } from 'react-redux';

const AllergenBox2 = () => {


const classes = useStyles()
const { forecast } = useSelector((state) => state.weather);


const [pollens,setPollens] = useState(forecast.AirAndPollen.slice(1,5))











  return (
    <>

    

  

    

      
      <Grid container spacing={0} className={classes.grid} style={{backgroundColor: 'rgba(175, 225, 175, .5)',  marginTop: '60px'}}>
      <Grid item xs={12} style={{marginTop: '30px', marginBottom: '30px'}}>
      <Typography variant="h3" className={classes.heading} ><span className={classes.bold}>Allergen Levels</span></Typography>
    </Grid>

          {pollens.map((item, index) => {

            
            
              return(
               <Grid item xs={12} md={6} style={{marginTop: '30px'}}  key={index} >
               { index % 3 === 0 ? <PollenMeter item={item} number={index}  /> : <PollenMeter2 item={item} number={index}  />}
               </Grid>
)
})}
       
      
        
      </Grid>

   
      
  
    </>
  )
}

export default AllergenBox2