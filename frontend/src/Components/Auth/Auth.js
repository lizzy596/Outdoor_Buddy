import React, { useState, useEffect } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField }  from '@mui/material';
import useStyles from './styles';


import { AUTH, END_ERROR } from '../../constants/actionTypes';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { signin, signup } from '../../actions/auth';
import Icon from './icon';
import {  InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {  getCache } from '../../actions/weather';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const initialState = { userName: '', password: '', confirmPassword: '', zipcode: ''};


const Auth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, message, code } = useSelector((state) => state.auth);

    const startKey = JSON.parse(sessionStorage.getItem('startKey'))




    useEffect(() => {
      if(startKey) {
        console.log('pulling from storage')
        dispatch(getCache())
        return
      } 
    }, [])
    

  
    
    const classes = useStyles()
  
  
    const [form, setForm] = useState(initialState);
      const [showPassword, setShowPassword] = useState(false);
      const [formCheck, setFormCheck] = useState(false)
      const [formCheckMessage, setFormCheckMessage] = useState('')
      const handleShowPassword = () => setShowPassword(!showPassword);
      const [passwordCheck, setPasswordCheck] = useState(false)
      const [zipcodeCheck, setZipcodeCheck] = useState(false)
      const [usernameCheck, setUsernameCheck] = useState(false)
      
      
      const [isSignup, setIsSignup] = useState(false);
      
 
     
  
      const switchMode = () => {
        setForm(initialState);
        dispatch({ type: END_ERROR })

        setIsSignup(!isSignup);
        //setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };

      const validateForm = (form) => {
        if(form.password.length < 6) {
            setFormCheck(true)
            setPasswordCheck(true)
            setFormCheckMessage('Password must be at least six characters')
            return
        }

        if(form.zipcode.length !== 5 || !Number(form.zipcode)) {
          setFormCheck(true)
          setZipcodeCheck(true)
          setFormCheckMessage('Zipcode must be a five digit number')
          return
      }

      if(form.username.length < 3 || form.username.length > 15) {
        setFormCheck(true)
        setUsernameCheck(true)
        setFormCheckMessage('Username must be between 3 and 15 characters')
        return
    }
      
       if(form.password !== form.confirmPassword) {
           setFormCheck(true)
           setPasswordCheck(true)
           setFormCheckMessage('Passwords do not match')
           return
       }


   dispatch(signup(form, navigate))

      

    }
    
  
  
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormCheck(false)
        setZipcodeCheck(false)
        setUsernameCheck(false)
        setPasswordCheck(false)
        setFormCheckMessage('')
        dispatch({ type: END_ERROR })
        


       
        if (isSignup) {

          validateForm(form)

         
        
         
        } else {
          dispatch({ type: END_ERROR })
          dispatch(signin(form, navigate));
        }
      };
  
  
      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
      
  

     
      const autoLogin = {
        username: 'JamieLovesGolf',
        password: 'password'
      }


      const demoLogin = () => {
        dispatch(signin(autoLogin, navigate));
      }











  return (
    <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={6}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
       </Avatar>
        <Typography component="h1" variant="h5" style={{margin: '20px 0px'}} className={classes.formTitle}>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        {error && <Typography component="p" color="error" style={{margin: '20px 0px'}} className={classes.errorMessage}>{message}</Typography>}
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
         

           <Grid item xs={12} sm={12}>
            <TextField name="username" required label="Username" error ={usernameCheck || code === 401} className={classes.textInput} helperText={usernameCheck ? formCheckMessage : ''}  onChange={handleChange}  />
        </Grid>

        <Grid item xs={12} sm={12}>
            <TextField name="password"  error ={isSignup ? passwordCheck : error} required  helperText={passwordCheck ? formCheckMessage : ''} className={classes.textInput} label="Password"   onChange={handleChange}  type={showPassword ? 'text' : 'password'}   InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
            }}  />
            </Grid>


     { isSignup && <Grid item xs={12} sm={12}> <TextField name="confirmPassword" error ={passwordCheck} required onChange={handleChange} className={classes.textInput} label="Confirm Password" type="password" /> </Grid> }
     { isSignup && <Grid item xs={12} sm={12}> <TextField name="zipcode" error ={zipcodeCheck || code === 405} required onChange={handleChange} className={classes.textInput} helperText={zipcodeCheck ? formCheckMessage : ''} type="number" label="Enter Zipcode" /> </Grid> }

          </Grid>


          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} style={{margin: '25px 0px 10px 0px'}}>
          { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>

          <Button fullWidth variant="contained" color="primary" onClick={demoLogin} className={classes.submit} style={{margin: '25px 0px 10px 0px'}}>Login with Demo Account</Button>
          
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
    
    </Paper>


  </Container>
  )
}

export default Auth