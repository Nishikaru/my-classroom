import React from 'react';

const CreateClassModal = ({AClass,setAClass}) => {
    const closeModal=()=>{
        setAClass(false);
    }
    return (
        <div className={AClass?'flex':'hidden'}>
            <div onClick={closeModal} className='fixed h-screen w-screen top-0 left-0 bg-black/40'></div>
            <div className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-indigo-500 p-2 rounded-md'>
                <form className='flex flex-col gap-3'>
                    <input type="text" className='border-2 border-indigo-600 rounded-md p-2 bg-transparent text-white font-semibold' placeholder='Class name' />
                    <button type='submit' className='border-2 border-indigo-600 rounded-md p-2 uppercase font-semibold'>Create</button>
                </form>

            </div>
        </div>
    );
};

export default CreateClassModal;