import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserrContext';

const Login = () => {
    document.title='Trip BD-Login'
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // geting data from context api
    const {setLoading,loginWithMail,goWithGoogle} = useContext(AuthContext);
    const [errorMsg ,setErrorMsg] = useState('');

    // login with email
  const logIn = (e)=>{
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;

    loginWithMail(email,password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        const currentUser ={
          email : user.email
        }
        // used jwt here
        // fetch('https://server-nishikaru.vercel.app/jwt',{
        //       method:'POST',
        //       headers:{
        //         'content-type':'application/json'
        //       },
        //       body:JSON.stringify(currentUser)
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{console.log(data)
        //       localStorage.setItem('token',data.token)
        //       if(user){
        //         navigate(from,{replace:true})
        //       }
        //     })
        //     .catch(err=>console.log(err))

            if(user){
              navigate(from,{replace:true})
            }
        setErrorMsg('')
    })
    .catch(error=>{
      setErrorMsg(error.message);
        console.log(errorMsg);
    })
}
    // log in with gooogle
    const signinWithGoogle = ()=>{
        goWithGoogle()
        .then(result=>{
            const user = result.user;
            // console.log(user);
            const currentUser ={
              email : user.email
            }
            // used jwt here
            // fetch('https://server-nishikaru.vercel.app/jwt',{
            //   method:'POST',
            //   headers:{
            //     'content-type':'application/json'
            //   },
            //   body:JSON.stringify(currentUser)
            // })
            // .then(res=>res.json())
            // .then(data=>{
            // localStorage.setItem('token',data.token)
            // if(user){
            //   navigate(from,{replace:true})
            // }
            // })
            // .catch(err=>console.log(err))
            
            if(user){
                navigate(from,{replace:true})
              }
              setErrorMsg('')
        })
        .catch(error=>{
    
        })
        .finally(()=>{
          setLoading(false);
        })
    }
    return (
        <div className='bg-indigo-400/80 h-screen w-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-white p-4 bg-indigo-500 rounded-md gap-3'>
                <div className='flex items-center'>
                <div>
                    <h1 className='text-3xl font-semibold'>Please login to <br /> enter the class room</h1>
                </div>
                <form onSubmit={logIn} className='flex flex-col gap-3 w-1/2'>
                    <input className='p-2 rounded-md bg-transparent border-2 border-indigo-600 font-semibold' type="email" name="email" id="email" placeholder='Email'/>
                    <input className='p-2 rounded-md bg-transparent border-2 border-indigo-600 font-semibold' type="password" name="password" id="password" placeholder='Password'/>
                    <button className='p-2 rounded-md border-2 border-indigo-600 hover:bg-indigo-600 transition-all font-semibold uppercase' type='submit'>Login</button>
                </form>

                </div>
                <div className='flex w-full items-center gap-5'> 
                    <hr className='w-full' />
                    <p>OR</p>
                    <hr className='w-full' />
                    
                </div>
                <button onClick={signinWithGoogle} className='uppercase font-semibold border-2 border-white rounded-md p-2 hover:bg-white hover:text-black transition-all'> Login with google</button>

            </div>
        </div>
    );
};

export default Login;