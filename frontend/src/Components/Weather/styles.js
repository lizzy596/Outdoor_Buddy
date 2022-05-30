import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

/*paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
   
}, */

wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
  
    

    [theme.breakpoints.down('md')]: {

       flexDirection: 'column',
       
       
       
   },

   [theme.breakpoints.down('sm')]: {

    flexDirection: 'column',
    
    
    
}, 
},


paper: {
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
       
        marginBottom: '25px',
        borderBottom: '6px white solid',
    },
 
    [theme.breakpoints.down('sm')]: {
 
        marginBottom: '25px',
        borderBottom: '6px white solid',
        
 }, 
    
   
},


weatherText: {
    marginRight: '20px',
},




locationDate: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "30px 0px 30px 0px",
    
    width: "100%",

},

city: {
    display: 'flex',
    justifySelf: 'center',
    flexWrap: 'nowrap',
    width: '100%',

},

weatherDesc: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'space-between',
    margin: "10px 0px",
   
    
},

wind: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'space-between',

},

bold : {
    fontWeight: 'bold',
},



box1: {
    display: 'flex',
    flexDirection: 'column',
    margin: "10px 0px",
    justifyContent: 'center',
    alignItems: 'center',
},

meterBox: {
    //backgroundColor: 'blue',
    width: '800px',
    
    marginRight: '50px',
    
},

paper1: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        marginBottom: '35px',
        //borderBottom: '6px white solid',
    },
 
    [theme.breakpoints.down('sm')]: {
        marginTop: '20px',
        marginBottom: '35px',
        //borderBottom: '6px white solid',
 }, 
    

}


     
 
}));