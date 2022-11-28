import React, { useContext } from 'react';
import { AuthContext } from '../../Comp/UserContext/UserrContext';

const CreateClassModal = ({AClass,setAClass}) => {
    const {user} = useContext(AuthContext)
    const closeModal=()=>{
        setAClass(false);
    }
    // api
    const createClass =(e)=>{
        e.preventDefault();
        const className = e.target.className.value;
        const data = {
            displayName: user.displayName,
            uid:user.uid,
            photoURL:user.photoURL,
            className: className
        }

        fetch('http://localhost:5000/classes',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(Data=>{console.log(Data)
            closeModal();
        });
        console.log(data)
    }
    return (
        <div className={AClass?'flex':'hidden'}>
            <div onClick={closeModal} className='fixed h-screen w-screen top-0 left-0 bg-black/40'></div>
            <div className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-indigo-500 p-2 rounded-md'>
                <form onSubmit={createClass} className='flex flex-col gap-3'>
                    <input name='className' type="text" className='border-2 border-indigo-600 rounded-md p-2 bg-transparent text-white font-semibold' placeholder='Class name' required/>
                    <button type='submit' className='border-2 border-indigo-600 rounded-md p-2 uppercase font-semibold hover:bg-indigo-600 transition-all'>Create</button>
                </form>

            </div>
        </div>
    );
};

export default CreateClassModal;