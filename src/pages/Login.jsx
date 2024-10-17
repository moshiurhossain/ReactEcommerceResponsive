import React, { useState } from 'react'
import Images from '../components/Images'
import Slide from '../assets/Slide.png'
import Flex from '../components/Flex'
import BreadCrum from '../components/BreadCrum';
import Container from '../components/Container';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../slices/userSlice';


const Login = () => {

  let dispatch = useDispatch()


  let navigate = useNavigate()

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [error, setError]= useState("")
 
///// fairebase login start
const auth = getAuth();
let handleLogin = ()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    toast.success('Login Successful', {
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
  
    // Signed in 
    const user = userCredential.user;
     
    dispatch(userLoginInfo(user))
    localStorage.setItem("user", JSON.stringify(user))
   
    // ... 
    // console.log(user)
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    toast.error( errorCode, {
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

    setError(errorCode)
  });

}

///// fairebase login end

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
<h1 className='font-medium lg:text-[36px] font-poppins' >Log in to Exclusive</h1>
<h3 className='font-normal lg:text-[16px] lg:mt-[24px] mt-[12px] text-[9px] font-poppins'>Enter your details below</h3>

{/* /////// */}
<div className='font-poppins lg:text-[16px] font-normal lg:mt-[48px] mt-[10px] text-[9px] '>




  <div className='lg:mt-[30px] mt-[5px] h-[32px] relative before:absolute before:content-[""]
 before:h-[2px] before:w-full before:bg-slate-300 lg:before:bottom-[-10px] before:bottom-1' >
  <input 
  
  onChange={(e)=>setEmail(e.target.value)}
  type="email"
   placeholder='Email or Phone Number'
    className='w-full outline-none'/>   
  </div>

  <div className='lg:mt-[30px] mt-[5px] h-[32px] relative before:absolute before:content-[""]
 before:h-[2px] before:w-full before:bg-slate-300 lg:before:bottom-[-10px] before:bottom-1' >
  <input 
  onChange={(e)=>setPassword(e.target.value)}
  type="password" 
  placeholder='Password' 
  className='w-full outline-none'/>   </div>
  

</div>


{/* ////////// */}
<Flex className='justify-between h-[30px] items-center lg:mt-[30px] mt-[10px]'>
<button 

onClick={handleLogin}
className='lg:w-[143px] w-[75px] hover:bg-blue-600 bg-titleColor text-white font-poppins lg:mt-[40px] mt-[10px] flex items-center justify-center lg:h-[56px] lg:rounded-md  font-medium lg:text-[16px] text-[9px] h-[30px] rounded-sm'>Log In</button>

 <p className=' font-poppins lg:text-[13px] text-[5px] font-normal text-titleColor lg:pt-[49px] pt-[20px]'>Forgot Password?</p>
</Flex>
{error &&
<p className='bg-red-800 text-white font-poppins font-medium text-center lg:rounded-md lg:mt-[60px] mt-[10px] text-[9px] lg:py-[4px] rounded-sm'>{error}</p>
}





</div>

 </Flex>
  </section>
  </>
  )
}

export default Login
