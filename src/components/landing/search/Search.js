import React from 'react';
import './Search.css';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';


export default function Search() {
    return(
             
         <div className='search'>
            <div className='input_wrap'>
            <FaSearch className='imgSearch'/>
            <input className='fieldSearch' type='text' placeholder="Поиск"/>
            </div>

            <div className='seti'>
            <img src='/images/instagram.svg'/>
            <img src='/images/telegram.svg'/>
            </div>

            <button className='create_btn'>Создать заявку</button>

            <div className='reg'>Регистрация</div>

            <Link to='/login'><button className='log_btn'>Вход</button></Link>
         </div>

       
   
     )
 }