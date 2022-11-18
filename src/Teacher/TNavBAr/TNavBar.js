import React from 'react';
import { Link } from 'react-router-dom';

const TNavBar = () => {
    return (
        <div>
            <nav className='flex justify-between px-80 py-3 bg-indigo-500 text-white'>
                <div className='text-xl font-bold'>
                    <Link to='/student' className='capitalize'>Teachers room</Link>
                </div>
                <div className='flex gap-6'>
                    <Link className='capitalize hover:border-b-4 border-indigo-600 transition-all'>classes</Link>
                    <Link className='capitalize hover:border-b-4 border-indigo-600 transition-all'>assignments</Link>
                    <Link className='capitalize hover:border-b-4 border-indigo-600 transition-all'>results</Link>
                </div>
            </nav>
        </div>
    );
};

export default TNavBar;