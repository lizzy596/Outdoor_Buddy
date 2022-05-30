import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        //backgroundColor: '#00000a'
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
           
         },
       
         [theme.breakpoints.down('sm')]: {
       
          
          justifyContent: 'space-between',
          
       }, 
    },


    toolNight: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#00000a',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
           
         },
       
         [theme.breakpoints.down('sm')]: {
       
          
          justifyContent: 'space-between',
          
       }, 
        
    },

    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
      },

    




    logo: {
        margin: '15px 0',

        [theme.breakpoints.down('md')]: {
            
           
        },
     
        [theme.breakpoints.down('sm')]: {
            margin: '15px 20px 15px 0px',
            width: '30mm',
            height: '8mm'
            
     }, 
    },


    mobileButton: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            marginLeft: '20px',
           
        },
     
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            marginLeft: '20px',
            
            
     }, 
    },

 

 

    
button: {
        marginRight: '30px',

      
    },

    buttonContainer: {

        [theme.breakpoints.down('md')]: {
            display: 'none',
           
        },
     
        [theme.breakpoints.down('sm')]: {
            display: 'none',
            
     },

    },


    logoLink: {
        textDecoration: 'none',
        color: 'white'
      },



     
 
}));