import * as React from 'react';
import { FunctionComponent } from 'react';
import '../components/App.css';
import './Home.css';
// import HomepageLogo from '../assets/navbarBG.png';
import { Button } from '@mui/material';
import {changeDataFetching} from '../redux/application/applicationActions';
import { useDispatch } from 'react-redux';

interface IHome {
    isLocal:boolean
}

 const Home:FunctionComponent<IHome> = ({isLocal})=> {

const HomepageLogo = require('../assets/homePageLogo.jpg');

  const dispatch = useDispatch()
  console.log(isLocal)
  return (
    <>
      {/* <h1 className='home'>EPIC</h1> */}
      <div style={{marginTop:'5%'}}>
      <Button variant="contained" onClick={()=>dispatch(changeDataFetching())}>fetching from {isLocal?"Local":"Backend"}</Button>
            <img src={HomepageLogo} alt="Homepage" width="900" height="600" className="center"/>
        </div>
       
    </>
  );
}

export default Home;
