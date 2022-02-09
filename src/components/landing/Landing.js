import React from 'react';
import './Landing.css';
import {Link} from 'react-router-dom';
import Search from './search/Search';
import Main from './main/Main';
import Info from './info/Info';
import Application from './application/Application';



export default function Landing() {
    return(
     <div className='landing'>
         <Search />
         <Main />
        <Info />
        <Application />
     </div>
     )
 }