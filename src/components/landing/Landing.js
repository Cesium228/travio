import React from 'react';
import './Landing.css';
import {Link} from 'react-router-dom'


export default function Landing() {
    return(
     <div className='landing'>
        <Link to='/login'>
        <button>Вход</button>
        </Link>
     </div>
     )
 }