import React from 'react';
import './Landing.css';
import {Link} from 'react-router-dom';
import Search from './search/Search';
import Main from './main/Main';


export default function Landing() {
    return(
     <div className='landing'>
         <Search />
         <Main />

       
     </div>
     )
 }