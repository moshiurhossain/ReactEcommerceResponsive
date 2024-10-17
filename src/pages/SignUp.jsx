import React, { useState,  } from 'react'
import Images from '../components/Images'
import Slide from '../assets/Slide.png'
import Flex from '../components/Flex'
import { FcGoogle } from "react-icons/fc";
import BreadCrum from '../components/BreadCrum';
import Container from '../components/Container';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification,updateProfile } from "firebase/auth";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../slices/userSlice';

const SignUp = () => {

let dispatch =useDispatch()
  // firebase start
  const auth = getAuth();
 

  let handleSignup = ()=>{
    if(name && email && password){
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      toast.success('🦄 Registration Successful', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });



      sendEmailVerification(auth.currentUser)
  .then(() => {
    updateProfile(auth.currentUser, {
      displayName: name, 
      
    }).then(() => {
 const user = userCredential.user;

    console.log(user)
    navigate('/login')
    }).catch((error) => {
      // An error occurred

      toast.error(errorCode, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

      // ...
    });
    // Email verification sent!
    // Signed up 
   
    // ...
    // ...
  });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode)
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      // const errorMessage = error.message;
      // ..
    });
    }
  }

  // firebase end

let navigate = useNavigate()

let [name, setName] = useState("")
let [email, setEmail] = useState("")
let [password, setPassword] = useState("")
let [error, setError]= useState("")


// sign-with-google START
let handleGoogoleLogin = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    
    
    const user = result.user;
    dispatch(userLoginInfo(user))
    localStorage.setItem('user',JSON.stringify(user))
    navigate('/')
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

// sign-with-google END



  return (
    <>
    <Container ><BreadCrum/></Container> 

  <section className='mt-[60px] mb-[120px]'>

{/* tostify start */}
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition= {Bounce}
/>
  

  {/*tostify end  */}
    <Flex>
 <Images src={Slide} className='lg:w-[780px] lg:h-[800px]  w-[150px] h-[200px] lg:inline-block ' />

<div className='lg:w-[371px] lg:h-[530px]  lg:my-[120px] my-[10px] lg:ml-[130px] ml-[50px]  font-poppins lg:mr-0 mr-[5px]'>
<h1 className='font-medium lg:text-[36px] font-poppins' >Create an account</h1>
<h3 className='font-normal lg:text-[16px] lg:mt-[24px] mt-[12px] text-[9px] font-poppins'>Enter your details below</h3>

{/* /////// */}
<div className='font-poppins lg:text-[16px] font-normal lg:mt-[48px] mt-[10px] text-[9px] '>


<div className='h-[32px] relative before:absolute before:content-[""]
 before:h-[2px] before:w-full before:bg-slate-300 lg:before:bottom-[-10px] before:bottom-1' >
  <input 
  onChange={(e)=>setName(e.target.value)}   
  type="text" 
  placeholder='Name' 
  className='w-full outline-none'/>   
  </div>

  <div className='lg:mt-[30px] mt-[5px] h-[32px] relative before:absolute before:content-[""]
 before:h-[2px] before:w-full before:bg-slate-300 lg:before:bottom-[-10px] before:bottom-1' >
  <input 
  
   onChange={(e)=>setEmail(e.target.value)}  
  type="email" 
  placeholder='Email or Phone Number'
   className='w-full outline-none'/>   </div>

  <div className='lg:mt-[30px] mt-[5px] h-[32px] relative before:absolute before:content-[""]
 before:h-[2px] before:w-full before:bg-slate-300 lg:before:bottom-[-10px] before:bottom-1' >
  <input
   onChange={(e)=>setPassword(e.target.value)}  
   type="password" 
   placeholder='Password' 
   className='w-full outline-none'/>   </div>
  

</div>


{/* ////////// */}
<button 

onClick={handleSignup}
className='w-full hover:bg-blue-600 bg-titleColor text-white font-poppins lg:mt-[40px] mt-[10px] flex items-center justify-center lg:h-[56px] lg:rounded-md  font-medium lg:text-[16px] text-[9px] h-[30px] rounded-sm'>Create Account</button>

{error &&
<p className='bg-red-950 text-white font-poppins font-medium text-center lg:rounded-md mt-[10px] text-[9px] lg:py-[4px] rounded-sm'>{error}</p>
}


<button
onClick={handleGoogoleLogin}
className='w-full border border-slate-400 font-poppins lg:mt-[20px] mt-[10px] flex items-center justify-center lg:h-[56px] lg:rounded-md  font-medium lg:text-[16px] text-[9px] h-[30px] rounded-sm'> <FcGoogle className='lg:text-[18px] text-[12px] mr-2' /> Sign up with Google</button>


<Flex className='lg:mt-[32px] mt-[10px] justify-center font-poppins lg:text-[13px] text-[9px] font-normal text-slate-500'><p>Already have account?</p><Link to='/login'> <p className=' lg:ml-[15px] ml-[8px] relative before:absolute before:content-[""] before:w-full before:h-[1px] before:bg-slate-500 before:bottom-[-3px]'>Log in</p></Link></Flex>


</div>

 </Flex>
  </section>
  </>
  )
}

export default SignUp
