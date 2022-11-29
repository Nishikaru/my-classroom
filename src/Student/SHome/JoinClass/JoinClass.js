import React from 'react';
import {HiOutlineFolderAdd} from 'react-icons/hi'


const JoinClass = ({showJoin}) => {
    
    return (
        <div onClick={showJoin} className='rounded-md border-indigo-600 border-2 text-4xl text-center flex justify-center items-center p-12 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all cursor-pointer'>
            <HiOutlineFolderAdd></HiOutlineFolderAdd>
        </div>
    );
};

export default JoinClass;