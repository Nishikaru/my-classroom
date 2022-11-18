import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Select = () => {
    const [animation,setAnimation] = useState(false);
    console.log(animation)
    useEffect(()=>{
        setAnimation(true)
    },[])
    console.log(animation)
    return (
        <div className='h-full w-full flex items-center justify-between'>
            <div className='bg-selectImgLeft h-screen w-[35vw] border-r-2 border-black bg-cover bg-center p-10'>
                <div className='flex justify-center animate-bounce p-5 text-indigo-500 border-4 rounded-md border-indigo-500'>
                    <h1 className='uppercase text-center text-4xl font-extrabold'>
                        my class
                    </h1>
                </div>
            </div>
            <div className='w-[65vw] h-screen flex gap-4 items-center justify-evenly bg-selectImgRight bg-cover bg-bottom text-indigo-500'>
                <Link to='/student' className='px-5 py-2 border-2 rounded-md border-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white transition-all text-xl'>Student</Link>
                <Link to='/teacher' className='px-5 py-2 border-2 rounded-md border-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white transition-all text-xl'>Teacher</Link>
            </div>
        </div>
    );
};

export default Select;