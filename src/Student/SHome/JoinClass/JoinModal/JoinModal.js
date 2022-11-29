import React, { useContext } from 'react';
import { AuthContext } from '../../../../Comp/UserContext/UserrContext';

const JoinModal = ({setJoinDiv}) => {
    const {user,setRe} = useContext(AuthContext)
    const joinAClass = (e)=>{
        e.preventDefault();
        const classID = e.target.classID.value;
        const newData = {
            classID:[classID],
            id:user.uid
        }
        // console.log(data)

        fetch('http://localhost:5000/joined/'+user.uid)
        .then(res=>res.json())
        .then(data=>{const arr = data?.classID
            if(arr.indexOf(newData.classID.toString())!=-1){
                return
            }
            arr.push(...newData.classID);
            fetch('http://localhost:5000/joined/'+user.uid,{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({
                    classID:[...arr]
                })
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setRe(data.classID)
            })
        })
        .catch(
            fetch('http://localhost:5000/joined',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(newData)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setRe(data.classID)
            })
        )
        setJoinDiv(false)
    }
    return (
        <div>
            <div onClick={()=>setJoinDiv(false)} className='absolute h-screen w-screen bg-black/70 top-0 left-0' ></div>

        <div className='absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-indigo-500 p-4 rounded-md'>
            <form onSubmit={joinAClass} className='flex flex-col gap-4'>
                <input className='rounded-md' type="number" name='classID' required/>
                <button className='border-2 border-indigo-600 rounded-md p-2 uppercase font-semibold hover:bg-indigo-600 transition-all'>Join</button>
            </form>
        </div>
        </div>
    );
};

export default JoinModal;