import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css'
import '../Styles/Body.css'
import post1 from '../Images/posts1.jpg';
import post2 from '../Images/posts2.jpg';
import post3 from '../Images/posts3.jpg';
import group3 from '../Images/group3.png';
import p1 from '../Images/p1.jpg';
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.jpg';
import p4 from '../Images/p4.jpg';
import share from '../Images/share.png';
import like from '../Images/like.png'
import loc from '../Images/loc.png'
import info from '../Images/info.png'
import edit from '../Images/edit_24px.png'
import s1 from '../Images/s1.jpg'
import s2 from '../Images/s2.jpg'
import s3 from '../Images/s3.jpg'
import s4 from '../Images/s4.jpg'
import case1 from '../Images/case.png';
import cal from '../Images/cal.png'
import { useDispatch, useSelector } from 'react-redux';
import { ischeck } from '../Redux/Slices/PopupSlice';
import { Dropdown } from "react-bootstrap";
import { isgroup } from '../Redux/Slices/GroupSlice';
import { FaShare } from 'react-icons/fa'; 
import { AiOutlineShareAlt } from 'react-icons/ai';

export default function Body() {

    const count = useSelector((state) => state.check.value);
    const group = useSelector((state) => state.group.value)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(isgroup(true))
    },[])

    const groups = [
        { name: "Leisure", image: s1, follow: true },
        { name: "Activism", image: s2, follow: true },
        { name: "MBA", image: s3, follow: true },
        { name: "Philosophy", image: s4, follow: true },
    ];


    return (
        <div className="postcards container mx-auto mt-4 posts px-xl-4 m-0 mx-auto " >
            <button className='edit' onClick={() => dispatch(ischeck(true))}><img src={edit} /></button>
            <div className="row">
                <div className="col-lg-8 col-12">
                    {/* Card 1 */}
                    <div className="card shadow-sm p-3">
                        <img
                            height={220}
                            width={220}
                            src={post1}
                            className="card-img-top"
                            alt="Example Article"
                        />
                        <div className="card-body">
                            <p className='fw-medium text-black'>✍️ Article</p>
                            <div className='d-flex justify-content-between align-items-center fw-bold'>
                                <h5 style={{ width: '75%' }} className="card-title fw-bold">What if famous brands had regular fonts? Meet RegulaBrands!</h5>

                                <div className="d-flex justify-content-end">
                                 
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"
                                            className="p-0 border-0"
                                            style={{
                                                backgroundColor: "transparent",
                                                color: 'transparent',
                                                width: '0px',
                                                display: 'inline'
                                            }}
                                        >
                                            <img src={group3} className='cursor-pointer' />
                                        </Dropdown.Toggle>

                                        {/* Dropdown Menu */}
                                        <Dropdown.Menu align="end" style={{ minWidth: "120px" }}>
                                            <Dropdown.Item href="#edit">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#report">Report</Dropdown.Item>
                                            <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <p className="card-text text-muted">
                                I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine...
                            </p>
                            <div className="justify-content-between align-items-center">
                                <div className='d-flex'>
                                    <img height={48} width={48} className='rounded-5' style={{ marginRight: '10px' }} src={p1} />
                                    <div className='likes'>
                                        <span className="text-muted fw-bold">Sarthak Kamra</span>
                                        <span className="text-muted" style={{ marginRight: '20px' }}>👁 1.4k views</span>
                                    </div>

                                    <button className='share1'> <AiOutlineShareAlt size={15} /></button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card shadow-sm p-3 mt-3">
                        <img
                            height={220}
                            width={220}
                            src={post2} 
                            className="card-img-top"
                            alt="Example Article"
                        />
                        <div className="card-body">
                            <p className='fw-medium text-black'>🔬️ Education</p>
                            <div className='d-flex justify-content-between align-items-center fw-bold'>
                                <h5 style={{ width: '75%' }} className="card-title fw-bold">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                <div className="d-flex justify-content-end">
                                    {/* Bootstrap Dropdown */}
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"

                                            className="p-0 border-0"
                                            style={{
                                                backgroundColor: "transparent",
                                                color: 'transparent',
                                                width: '0px',
                                                display: 'inline'
                                            }}
                                        >
                                            <img src={group3} className='cursor-pointer' />
                                        </Dropdown.Toggle>

                                        {/* Dropdown Menu */}
                                        <Dropdown.Menu align="end" style={{ minWidth: "120px" }}>
                                            <Dropdown.Item href="#edit">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#report">Report</Dropdown.Item>
                                            <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <p className="card-text text-muted">
                                I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                            </p>
                            <div className="justify-content-between align-items-center">
                                <div className='d-flex'>
                                    <img height={48} width={48} className='rounded-5' style={{ marginRight: '10px' }} src={p2} />
                                    <div className='likes'>
                                        <span className="text-muted fw-bold">Sarah West</span>
                                        <span className="text-muted" style={{ marginRight: '20px' }}>👁 1.4k views</span>
                                    </div>
                                    <div>
                                    <button className='share1'> <AiOutlineShareAlt size={15} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card shadow-sm p-3 mt-3">
                        <img
                            height={220}
                            width={220}
                            src={post3} 
                            className="card-img-top"
                            alt="Example Article"
                        />
                        <div className="card-body">
                            <small className="fw-medium text-black">🗓️ Meetup</small>
                            <div className='d-flex justify-content-between align-items-center fw-bold mt-3'>
                                <h5 style={{ width: '75%' }} className="card-title fw-bold">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                <div className="d-flex justify-content-end">
                                    {/* Bootstrap Dropdown */}
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"

                                            className="p-0 border-0"
                                            style={{
                                                backgroundColor: "transparent",
                                                color: 'transparent',
                                                width: '0px',
                                                display: 'inline'
                                            }}
                                        >
                                            <img src={group3} className='cursor-pointer' />
                                        </Dropdown.Toggle>

                                        {/* Dropdown Menu */}
                                        <Dropdown.Menu align="end" style={{ minWidth: "120px" }}>
                                            <Dropdown.Item href="#edit">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#report">Report</Dropdown.Item>
                                            <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>

                            <div class="card-text d-flex text-black" style={{ rowGap: '20px', fontSize: '15px' }}>
                                <p className='mr-4' style={{ marginRight: '6%' }}> <img src={cal} height={18} width={18} /> Fri, 12 Oct, 2018</p>

                                <img src={loc} height={18} width={18} /> Ahmedabad, India
                            </div>
                            <a href="#" class="visit btn btn-outline-danger btn-sm">Visit Website</a>
                        </div>
                        <div className="justify-content-between align-items-center">
                            <div className='d-flex'>
                                <img height={48} width={48} className='rounded-5' style={{ marginRight: '10px' }} src={p3} />
                                <div className='likes'>
                                    <span className="text-muted fw-bold">Ronal Jones</span>
                                    <span className="text-muted" style={{ marginRight: '20px' }}>👁 800 views</span>
                                </div>
                                <div>
                                <button className='share1'> <AiOutlineShareAlt size={15} /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card-4 */}
                    <div className="card shadow-sm mt-3 p-3 mb-4">
                        <div className="card-body">
                            <small className="fw-medium text-black">💼️ Job</small>
                            <div className='d-flex justify-content-between align-items-center fw-bold mt-3'>
                                <h5 style={{ width: '75%' }} className="card-title fw-bold">Software Developer</h5>
                                <div className="d-flex justify-content-end">
                                    {/* Bootstrap Dropdown */}
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="light"

                                            className="p-0 border-0"
                                            style={{
                                                backgroundColor: "transparent",
                                                color: 'transparent',
                                                width: '0px',
                                                display: 'inline'
                                            }}
                                        >
                                            <img src={group3} className='cursor-pointer' />
                                        </Dropdown.Toggle>

                                        {/* Dropdown Menu */}
                                        <Dropdown.Menu align="end" style={{ minWidth: "120px" }}>
                                            <Dropdown.Item href="#edit">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#report">Report</Dropdown.Item>
                                            <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>

                            <div class="card-text d-flex text-black" style={{ rowGap: '20px', fontSize: '15px' }}>
                                <p className='mr-4' style={{ marginRight: '6%' }}> <img src={case1} height={18} width={18} /> Innovaccer Analytics Private Ltd.</p>

                                <img src={loc} height={18} width={18} /> Noida, India
                            </div>
                            <a href="#" class="visit btn btn-outline-success btn-sm">Apply on Timesjobs</a>
                        </div>
                        <div className="justify-content-between align-items-center">
                            <div className='d-flex'>
                                <img height={45} width={48} className='rounded-5' style={{ marginRight: '10px',borderRadius:'50%' }} src={p4} />
                                <div className='likes'>
                                    <span className="text-muted fw-bold">Joseph Gray</span>
                                    <span className="text-muted" style={{ marginRight: '20px' }}>👁 4.8k views</span>
                                </div>
                                <div>
                                <button className='share1'> <AiOutlineShareAlt size={15} /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                {/* Recommended Groups Section */}
                <div className="col-lg-4 d-none d-lg-block" style={{ marginLeft: 0 }}>

                    <img className='inpu1' src={loc} height={18} width={18} />
                    <input type='text' className='mx-auto ml-3 inpu' style={{ marginLeft: '10px' }} placeholder='|Enter your location' />
                    <br />
                    <br />
                    <div className='d-flex mb-4'>
                        <img style={{ marginRight: '10px' }} src={info} width={18} height={18} />
                        <span style={{ fontSize: '12px' }}>Your location will help us serve better and extend a personalised experience.</span>
                    </div>
                    {
                        group && <div className="card p-3 shadow-sm" style={{ border: 'none' }}>
                            <h6 className="fw-medium mb-3" style={{
                                fontSize: '14px',
                                lineHeight: '18.2px',
                                letterSpacing: '0.1em',
                            }}>
                                <img src={like} width={18} height={18} />
                                <i className="bi bi-hand-thumbs-up me-2"></i>
                                RECOMMENDED GROUPS
                            </h6>
                            {groups.map((group, index) => (
                                <div
                                    key={index}
                                    className="d-flex align-items-center justify-content-between mb-3"
                                >
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={group.image}
                                            alt={group.name}
                                            className="rounded-circle me-2"
                                            width="36"
                                            height="36"
                                        />
                                        <span>{group.name}</span>
                                    </div>
                                    <button className="btn btn-light btn-sm rounded-5">Follow</button>
                                </div>
                            ))}
                            <div className="text-end">
                                <a href="#see-more" className="text-primary fw-bold small">
                                    See More...
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};


