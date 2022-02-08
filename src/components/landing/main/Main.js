import React from 'react';
import './Main.css';



export default function Main() {
    return(
             
         <div className='main'>

           <div className='main_nav'> 

           <div className='main_logo'>
           <img src='/images/main_logo.svg'/>
           </div>

           <div className='nav'>
                <div>О проекте</div>
                <div>Список переработчиков</div>
                <div>Интерактивная карта</div>
                <div>Экотовары</div>
                <div>FAQ</div>
                <div>Новости</div>
                <div>Контакты</div>
            </div>
            </div>

            <div className='main_content'>
                <div className='main_content_1'>
                    <div className='main_text'> <b>TraVio</b> - автоматизированное решение, призванное упростить процесс переработки отходов для предприятий</div>
                    <div className='main_btn'><button>Присоединиться</button></div>
                </div>
                <div className='main_content_2'>
                <img src='/images/main_logo_big.svg'/>
                </div>

            </div>

         </div>

       
   
     )
 }