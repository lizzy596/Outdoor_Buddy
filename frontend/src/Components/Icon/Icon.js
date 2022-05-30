
import React, { useEffect} from 'react'
import Icon6 from '../../assets/icons/6.svg';
import Icon1 from '../../assets/icons/1.svg';
import Icon33 from '../../assets/icons/33.svg';
import { useDispatch, useSelector } from 'react-redux';
const svgDir = require.context('../../assets/icons/');





const Icon = () => {





    const { weather } = useSelector((state) => state.weather);

  



  return (
    <img src={svgDir(`./${weather.WeatherIcon}.svg`)} alt="logo" style={{color: 'white', height: '60px', width: '60px', backgroundColor: 'white', borderRadius: '50%'}} />
  )
}

export default Icon