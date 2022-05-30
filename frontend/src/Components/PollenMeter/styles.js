import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

paper: {
    padding: '20px 0px',
    width: '100%'
},
title : {
    textAlign: 'center',
    paddingBottom: '20px',
    //color: '#097969',
    //color: '#03594d' 
    //color: '#0818A8'
    color: '#9202eb',
    [theme.breakpoints.down('md')]: {

        textDecoration: 'underline',
    },
    
    [theme.breakpoints.down('sm')]: {
    
        textDecoration: 'underline',
    }, 
   

},

bold : {
    fontWeight: 'bold',
 },


     
 
}));