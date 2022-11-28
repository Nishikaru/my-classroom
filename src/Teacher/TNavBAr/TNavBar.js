import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai'
import CreateClassModal from '../CreateClassModal/CreateClassModal';
import Profile from './Profile/Profile';

const TNavBar = () => {
    const [AClass,setAClass] = useState(false);
    const createClass = ()=>{
        setAClass(!AClass);
    }
    return (
        <div>
            <nav className='flex justify-between items-center px-80 py-3 bg-indigo-500 text-white'>
                <div className='text-xl font-bold'>
                    <Link to='/teacher' className='capitalize'>Teachers room</Link>
                </div>
                <CreateClassModal AClass={AClass} setAClass={setAClass}></CreateClassModal>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-5' >
                    <div onClick={createClass} title='Create a class' className='p-2 border-2 border-indigo-600 hover:bg-indigo-600 rounded-md transition-all cursor-pointer' >
                    <AiOutlinePlus></AiOutlinePlus>
                    </div>
                    <Profile></Profile>
                    </div>
                </div>
                
                
            </nav>
        </div>
    );
};

export default TNavBar;