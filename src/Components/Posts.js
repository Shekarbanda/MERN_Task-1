import React, { useEffect, useState } from 'react'
import '../Styles/Banner.css'
import group from '../Images/group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { isgroup } from '../Redux/Slices/GroupSlice';

export default function Posts() {
    const [isclick,setisclick] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(isclick)
            dispatch(isgroup(true))
        else
            dispatch(isgroup(false))
    },[isclick])
  return (
    <div style={{rowGap:'20px',width:"85%"}} className='posts px-xl-4 m-0 mx-auto navbar d-flex align-items-end'>
        <div  className='tags justify-content-evenly align-items-end'>
            <span className='cursor-pointer fw-bold' style={{borderBottom:'0.8px solid black'}}>All Posts(32)</span>
            <span className='cursor-pointer hov'>Article</span>
            <span className='cursor-pointer hov'>Event</span>
            <span className='cursor-pointer hov'>Education</span>
            <span className='cursor-pointer hov'>Job</span>
        </div>
        <div className='butns1' >
            <select className='filter cursor-pointer'>
                <option>Write a Post</option>
                <option>Write a Post</option>
            </select>
            {
                isclick?
            <button onClick={()=>setisclick(!isclick)} className='leave'><FontAwesomeIcon icon={faRightFromBracket} /> Leave Group</button>
            :<button onClick={()=>setisclick(!isclick)} className='join2'><img src={group}/> Join Group</button>
            }
        </div>
        <div className='small-tags justify-content-between align-items-center'>
            <p>Posts(368)</p>
            <select className='filter'>
                <option>Filter: All</option>
                <option>Write Post</option>
            </select>
        </div>
    </div>
  )
}
