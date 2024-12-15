import React, { useState } from 'react'
import banner from '../Images/banner.png'
import '../Styles/Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

export default function Banner() {
  const [isjoin,setisjoin] = useState(false);
  return (
    <div class="banner1 h-100 w-100 background-text-home position-relative ">
        <img src={banner} className='res'/>
        <div className='back2 w-100 justify-content-between align-items-center position-absolute py-2 px-3 m-0'>
          <FontAwesomeIcon icon={faArrowLeft} size="1x" className='text-white'/>
          <button onClick={()=>setisjoin(!isjoin)} className='join cursor-pointer'>{isjoin?"Leave Group":"Join Group"}</button>
        </div>
        <div className='para d-flex flex-column text-white position-absolute p-0 m-0'>
            <p className='fs-1 fw-bold'>Computer Engineering</p>
            <p className='small1'>142,765 Computer Engineers follow this</p>
        </div>
        <div class="banner container-fluid p-0 position-relative custom-bg-container">
        <div className='back1 w-100 justify-content-between align-items-center position-absolute px-5 py-3 m-0'>
          <FontAwesomeIcon icon={faArrowLeft} size="1x" className='text-white'/>
          <button onClick={()=>setisjoin(!isjoin)} className='join cursor-pointer'>{isjoin?"Leave Group":"Join Group"}</button>
        </div>
        <div className='para  d-flex flex-column text-white position-absolute p-0 m-0'>
            <p className='fs-1 fw-bold'>Computer Engineering</p>
            <p className='small1'>142,765 Computer Engineers follow this</p>
        </div>
        </div>
    </div>
  )
}
