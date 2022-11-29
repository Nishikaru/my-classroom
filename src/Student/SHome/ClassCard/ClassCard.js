import React, { useEffect, useState } from 'react';

const ClassCard = ({id}) => {
    const [classData,setClassData] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/classes/'+id)
        .then(res=>res.json())
        .then(data=>setClassData(data))
    },[])
    return (
        <>
        {classData.id?
            <div className='flex items-center justify-evenly p-2 rounded-md bg-indigo-500 text-white shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all'>
            <div className='rounded-full'>
                <img className='rounded-full' width={50} src={classData.photoURL} alt="" />
            </div>
            <div className='w-1/3'>
            <h1 className='text-3xl capitalize'>{classData.className}</h1>
            <div className='flex flex-wrap gap-3'>
            <p className='capitalize'>by: {classData.displayName}</p>
            <p className='capitalize'>Class id: {id}</p>
            </div>
            </div>
            {/* <div onClick={deleteID} className='text-2xl text-red-400/75'>
                <MdDelete></MdDelete>
            </div> */}
        </div>:null
        }
        </>
    );
};

export default ClassCard;