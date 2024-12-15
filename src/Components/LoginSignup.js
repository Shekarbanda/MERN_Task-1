import React, { useEffect, useState } from "react";
import  "../Styles/Login.css";
import loginimg from '../Images/login_img.png'
import google from '../Images/google.png'
import fb from '../Images/fb.png'
import { useDispatch, useSelector } from "react-redux";
import { ischeck } from "../Redux/Slices/PopupSlice";
import { islogin } from "../Redux/Slices/LoginSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSignUp = () => {
  const [showPopup, setShowPopup] = useState("");
  const count = useSelector((state) => state.check.value)
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login.value)

  const openPopup = (type) => setShowPopup(type);

  const closePopup = () => {
    dispatch(ischeck(false))
    setShowPopup("");
  }

useEffect(()=>{
    if(count)
    openPopup("signup")
},[count])  

const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

  return (
    <div className="container" style={{zIndex:"20000"}}>

      {showPopup && <div className="overlay" onClick={closePopup}></div>}

      {showPopup === "signup" && (
        <div className="popup">
          <button className="btn-close py-4 px-4 position-absolute top-0 end-0 m-2" onClick={closePopup}></button>
          <h4 className="reg text-center" style={{color:'#008A45',fontSize:'14px',backgroundColor:'#EFFFF4',height:'50px',padding:'30px',borderRadius: '10px'}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h4>
          <div className="smlogin d-flex gap-3" style={{padding:"30px"}}>
            <div className="smallp">
                <h3 className="text-black fw-bold mb-4">Create Account</h3>
                <form style={{fontSize:'14px'}} onSubmit={(e)=>{e.preventDefault();closePopup();dispatch(islogin(true))}}>
                    <div className=" d-flex">
                        <input type="text" className="form-control w-50" placeholder="First Name" />
                        <input type="text" className="form-control w-50" placeholder="Last Name" />
                    </div>
                    <input type="email" className="form-control p-2" placeholder="Email" />
                    <div className="position-relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mb-4 p-2"
                    placeholder="Password"
                    required
                />
                {/* Show/Hide Password Button */}
                <span
                    onClick={togglePasswordVisibility}
                    className="position-absolute"
                    style={{
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        fontSize: "12px",
                        color: "#0d6efd",
                    }}
                >
                    {showPassword ? (
                        <FaEyeSlash size={18} color="#0d6efd" />
                    ) : (
                        <FaEye size={18} color="#0d6efd" />
                    )}
                </span>
            </div>
                    <input type="password" className="form-control mb-4 p-2" placeholder="Confirm Password" />
                    <div className="resp d-flex justify-content-between align-items-center">
                        <button type="submit" className="subbtn btn btn-primary rounded-5 mb-4">Create Account</button>
                        <p className="mobmsg link" onClick={() => openPopup("login")}>Or, Sign In</p>
                    </div>
                    
                    <div className="text-center">
                        <button className="btn social w-100 mb-2"><img src={google}/> Sign in with Facebook</button>
                        <button className="btn social w-100 mb-4"><img src={fb}/> Sign in with Google</button>
                        <span className="forgot pb-4">By signing up, you agree to our Terms & conditions, Privacy policy</span>
                    </div>
                </form>
            </div>
            <div className="d-flex flex-column text-center" style={{width:'320px'}}>
                <p className="logimg" style={{fontSize:"13px"}}>
                Already have an account? <span className="link fw-medium" onClick={() => openPopup("login")}>Sign In</span>
                    </p>
                <img className="logimg" width={320} height={320} src={loginimg}/>
                
            </div>
          </div>
        </div>
      )}

      {showPopup === "login" && (
        <div className="popup" >
          <button className="btn-close position-absolute py-4 px-4 top-0 end-0 m-2" onClick={closePopup}></button>
          <h4 className="text-center reg" style={{color:'#008A45',fontSize:'14px',backgroundColor:'#EFFFF4',height:'50px',padding:'30px',borderRadius: '10px'}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h4>
          <div className="smlogin d-flex gap-3" style={{padding:"30px"}}>
            <div  className='smallp'>
                <h3 className="text-black fw-bold mb-4">Welcome back!</h3>
                <form style={{fontSize:'14px'}} onSubmit={(e)=>{e.preventDefault();closePopup();dispatch(islogin(true))}}>
                    <input type="email" className="form-control p-2" placeholder="Email" />
                    <div className="position-relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mb-4 p-2"
                    placeholder="Password"
                    required
                />
                {/* Show/Hide Password Button */}
                <span
                    onClick={togglePasswordVisibility}
                    className="position-absolute"
                    style={{
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        fontSize: "12px",
                        color: "#0d6efd",
                    }}
                >
                    {showPassword ? (
                        <FaEyeSlash size={18} color="#0d6efd" />
                    ) : (
                        <FaEye size={18} color="#0d6efd" />
                    )}
                </span>
            </div>
                    <div className="resp d-flex justify-content-between align-items-center">
                        <button type="submit" className="subbtn btn btn-primary rounded-5 mb-4">Sign In</button>
                        <p className="mobmsg link" onClick={() => openPopup("signup")}>Or, Create Account</p>
                    </div>
                    <div className="text-center">
                    <button className="btn social w-100 mb-2 py-2 mx-auto"><img src={google}/> Sign in with Facebook</button>
                    <button className="btn social w-100 py-2 mx-auto mb-4"><img src={fb}/> Sign in with Google</button>
                    <span className="forgot">Forgot Password?</span>
                    </div>
                    
                </form>
            </div>
            <div className="logimg d-flex flex-column text-center" style={{width:'320px'}}>
                <p className="logimg" style={{fontSize:"13px"}}>
                Don’t have an account yet? <span className="link fw-medium" onClick={() => openPopup("signup")}>Create new for free!</span>
                    </p>
                <img width={320} height={320} className="logimg" src={loginimg}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignUp;
