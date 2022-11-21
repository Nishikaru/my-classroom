import React from 'react';

const Login = () => {
    return (
        <div className='bg-indigo-400/80 h-screen w-screen flex justify-center items-center'>
            <div className='flex  justify-center items-center text-white p-4 bg-indigo-500 rounded-md gap-3'>
                <div>
                    <h1 className='text-3xl font-semibold'>Please login to <br /> enter the class room</h1>
                </div>
                <form className='flex flex-col gap-3 w-1/2'>
                    <input className='p-2 rounded-md bg-transparent border-2 border-indigo-600 font-semibold' type="email" name="email" id="email" placeholder='Email'/>
                    <input className='p-2 rounded-md bg-transparent border-2 border-indigo-600 font-semibold' type="password" name="password" id="password" placeholder='Password'/>
                    <button className='p-2 rounded-md border-2 border-indigo-600 hover:bg-indigo-600 transition-all font-semibold uppercase' type='submit'>Login</button>
                </form>

            </div>
        </div>
    );
};

export default Login;