import React from 'react';
import './Application.css';



export default function Application() {
    return(
             
         <div className='application'>
             <div className='application_inner'>
                 <div className='appl_inner_1'> <img src='/images/appl_logo.svg'/></div>
                 <div className='appl_inner_2'>
                     <div className='appl_text'>Разместите заявку на переработку отходов и выберите наиболее удобное и выгодное для вас предложение</div>
                     <button className='appl_btn'>Создать заявку</button>
                     <div className='appl_5min'>Займёт не более 5 минут!</div>
                 </div>
             </div>
         </div>

       
   
     )
 }