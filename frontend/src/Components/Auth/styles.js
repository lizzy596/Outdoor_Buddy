import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: '100px',
    marginBottom: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    
  },

  formTitle: {
    margin: '20px 0px',
  },

  submit: {
    margin: '25px 0px'
  },
  googleButton: {
    marginBottom: '20px',
  },

  textInput: {
      width: '100%'
  },
  errorMessage: {
    margin: '50px 0'
  }




}));