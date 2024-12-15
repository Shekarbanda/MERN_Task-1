import React from 'react'
import logo from '../Images/whole.png'
import searchicon from '../Images/Vector.png'
import '../Styles/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { ischeck } from '../Redux/Slices/PopupSlice'
import profile from '../Images/p4.jpg';

export default function Navbar() {
  const count = useSelector((state) => state.check.value)
   const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch();

  return (
    <div className='container p-0 m-0 mx-auto navbar d-lg-flex justify-content-between align-items-center d-none'>
        <img src={logo} className='cursor-pointer' width="162.57px" height="24px" alt="Logo"/>
        <div className='searchbar'>
            <img alt="Search" className='search-icon cursor-pointer' src={searchicon}/>
            <input class="search" type="text" placeholder="Search for your favorite groups in ATG"/>
        </div>
        
          {
            login?
            <div className='create-account d-flex align-items-center'>
              <div className='d-flex align-items-center'>
                <img src={profile} width={36} height={36} className='rounded-5' style={{marginRight:'10px'}}/>
                <span>Siddharth Goyal</span>
                <div className='drop'>▼</div>
              </div>
            </div>:
            <div className='create-account d-flex align-items-center' onClick={()=>dispatch(ischeck(true))}>
              <button class="btn custom-btn-create p-2 m-0" >Create account. <span class="text-primary fw-bold">It's Free!</span></button>
              <div className='drop'>▼</div>
            <div/>
            </div>
          }
        
          
         
    </div>
  )
}
