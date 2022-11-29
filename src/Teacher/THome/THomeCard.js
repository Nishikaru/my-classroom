import React, { useContext } from 'react';
import { AuthContext } from '../../Comp/UserContext/UserrContext';
import {MdDelete} from 'react-icons/md'

const THomeCard = ({name}) => {
    const {setRe} = useContext(AuthContext)
    const{className,displayName,photoURL,id}=name;
    // console.log(name)
    const deleteID = ()=>{
        fetch(`http://localhost:5000/classes/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        setRe(id+'delete');
    }
    return (
        <div className='flex items-center justify-evenly p-2 rounded-md bg-indigo-500 text-white shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all'>
            <div className='rounded-full'>
                <img className='rounded-full' width={50} src={photoURL} alt="" />
            </div>
            <div className='w-1/3'>
            <h1 className='text-3xl capitalize'>{className}</h1>
            <div className='flex flex-wrap gap-3'>
            <p className='capitalize'>by: {displayName}</p>
            <p className='capitalize'>Class id: {id}</p>
            </div>
            </div>
            <div onClick={deleteID} className='text-2xl text-red-400/75'>
                <MdDelete></MdDelete>
            </div>
        </div>
    );
};

export default THomeCard;