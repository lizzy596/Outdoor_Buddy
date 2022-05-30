
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import PollenMeter from '../PollenMeter/PollenMeter'
import AirMeter from '../AirMeter/AirMeter'
import UvMeter from '../UvMeter/UvMeter'




const MeterBox = () => {

    const classes = useStyles()


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <AirMeter />
        </Grid>
        <Grid item xs={12} md={6}>
        <UvMeter />
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default MeterBox