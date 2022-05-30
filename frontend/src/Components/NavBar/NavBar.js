import React, {useState, useEffect } from 'react';
import useStyles from './styles';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button  from '@mui/material/Button';
import { Paper } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../actions/weather';
import { LOGOUT, END_ZIPCODE_ERROR } from '../../constants/actionTypes';
import Logo from '../../assets/logo23.svg'
import Logo2 from '../../assets/logo24.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { CircularProgress } from '@mui/material';
import decode from 'jwt-decode';


import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));






const NavBar = () => {
    
const classes = useStyles()
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()

const [search, setSearch] = useState('')

const { error, message, weather, isLoading } = useSelector((state) => state.weather);





const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));





const getLogout = async () => {
  await dispatch({ type: LOGOUT})
  await dispatch(getWeatherData('78704'))
  navigate('/')
}




useEffect(() => {
  const token = user?.token

  if (token) {
    const decodedToken = decode(token);
      if(decodedToken.exp < Date.now() / 1000) getLogout()
    //if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }
   
  setUser(JSON.parse(localStorage.getItem('profile')))
 }, [location])



if(error && message === 405) {
  alert('Enter Valid Zipcode!!')
  dispatch({type: END_ZIPCODE_ERROR })
}

if(error && message === 500) {
  alert('API request limit reached, please try again later!!')
  dispatch({type: END_ZIPCODE_ERROR })
}





 const handleKeyPress = (e) => {
  if (e.keyCode === 13) {
      if(search.length === 5 && Number(search)) {
       
        
        dispatch(getWeatherData(search))
        setSearch('')
       
      } else {
        alert('enter valid, 5 digit zipcode')
      }

} 

}


const getLogin = () => {
  navigate('/auth')
}



//className={`task ${task.reminder && 'reminder'}`}

if (isLoading) {
  return (
    <Paper elevation={0} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper>
  );
}



  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
  
   <Toolbar className={weather.IsDayTime ? `${classes.toolbar}` : `${classes.toolNight}`}  > 
     

     
         
          <Link to="/" className={classes.logoLink}>
         
          <img src={Logo} className={classes.logo} alt="logo"  />

        

         
         </Link> 

       

      
      
      
      
      
      
       {!user && <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Enter Zipcode…"
            onKeyDown={handleKeyPress}
            inputProps={{ 'aria-label': 'search' }}
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        </div>}

     


        <div className={classes.buttonContainer}>

        { user ? <Button variant="contained" className={classes.button} color="error" onClick={getLogout}>Logout</Button> :
        <Button variant="contained" className={classes.button} color="error" onClick={getLogin}>Login / Register</Button>}
        </div>

        <div className={classes.mobileButton}>
        {user?  <LogoutIcon onClick={getLogout} style={{  color: 'white', fontSize: '35px' }} /> :
        <AccountCircleIcon onClick={getLogin} style={{  color: 'white', fontSize: '35px' }} />}
        </div>




      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar