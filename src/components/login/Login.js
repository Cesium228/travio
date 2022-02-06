import React from 'react';
import './Login.css';


export default function Login(props) {
   return(
       <div className='login'>
           <div className='logo'><img src='/images/logo.svg'/></div>
           <div className='login_travio'>
               <div className='login_text'>Авторизация в TRAV.IO</div>
               <input className='input_mail' name='email' type='email' placeholder='E-mail'/>
               <input className='input_password' name='password'  type='password' placeholder='Пароль'/>
               <div className='rememberMe'>
                    <div><input type='checkbox'/>Запомнить меня</div>
                    <div>Забыли пароль?</div>
               </div>
               
                   <button className='login_btn'>Войти</button>
               
           </div>

           <div className='reg_travio'>
               <div className='reg_text'>Еще нет аккаунта?
              Зарегистрируйтесь в TRAV.IO!</div>
               <button className='reg_btn'>Зарегистрироваться</button>
           </div>

       </div>
   ) 
}