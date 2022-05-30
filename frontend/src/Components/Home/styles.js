import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

 container: {
    //width: '100vw',
    width: '100%',
    //height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '1480px',

    [theme.breakpoints.down('md')]: {

     height: 'auto',
  },

  [theme.breakpoints.down('sm')]: {

   height: 'auto',
}, 

  
 },
 weatherBox: {
    paddingTop: '40px',
    paddingBottom: '40px',
    width: '100%',
   
 },

 bold : {
   fontWeight: 'bold',
},

date: {
   position: 'absolute',
   top:'95px',
   right: '25px',
   color: 'white'
},

box: {
   display: 'flex',
   justifySelf: 'center',
   backgroundColor: 'green'
},

allergyBox: {
   display: 'flex',
   justifyContent: 'center',
   //backgroundColor: 'orange'
},

loadingPaper: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '20px',
   borderRadius: '15px',
   height: '39vh',
 },


     
 
}));