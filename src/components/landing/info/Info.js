import React from 'react';
import './Info.css';



export default function Info() {
    return(
             
         <div className='info'>
             <div className='info_inner'>
                 <div className='info_text'>
                 <img src='/images/info_1.svg'/>
                 <div>Размещайте заявки на переработку разных групп отходов</div>
                 </div>
                <div className='info_text'>
                <img src='/images/info_2.svg'/>
                <div>В оператиный срок получайте отклик от перерабатывающих  организаций</div>
                </div>
                <div className='info_text'>
                <img src='/images/info_3.svg'/>
                <div>Выбирайте наиболее выгодные предложения по вашим критериям</div>
                </div>
                <div className='info_text'>
                <img src='/images/info_4.svg'/>
                <div>TraVio поможет определить другие виды отходов и конвертировать их в деньги</div>
                </div>
                <div className='info_text'>
                <img src='/images/info_5.svg'/>
                <div>Накапливайте бонусные баллы и получайте скидки на экотовары у наших партнёров</div>
                </div>
          
             </div>
         </div>

       
   
     )
 }