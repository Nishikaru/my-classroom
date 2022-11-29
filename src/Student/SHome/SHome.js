import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Comp/UserContext/UserrContext';
import ClassCard from './ClassCard/ClassCard';
import JoinClass from './JoinClass/JoinClass';
import JoinModal from './JoinClass/JoinModal/JoinModal';

const SHome = () => {
    const {user,re} = useContext(AuthContext)
    const [joinedClassID,setJoinedClass] = useState([])
    const [joinDiv,setJoinDiv] = useState(false)
    const showJoin = ()=>{
        setJoinDiv(!joinDiv);
    }
    useEffect(()=>{
        fetch('http://localhost:5000/joined/'+user.uid)
        .then(res=>res.json())
        .then(data=>{console.log(data)
            setJoinedClass(data.classID)
        })
    },[re])
    return (
        <div>
            <div className='px-80 py-4 grid grid-cols-3 gap-6'>
                <JoinClass showJoin={showJoin}></JoinClass>
                {
                    joinedClassID.map(id=><ClassCard key={id} id={id}></ClassCard> )
                }
            </div>
            <div className={joinDiv?'flex':'hidden'}>
            <JoinModal setJoinDiv={setJoinDiv}></JoinModal>
            </div>
        </div>
    );
};

export default SHome;