import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Comp/UserContext/UserrContext';
import THomeCard from './THomeCard';

const THome = () => {
    const {user,re} = useContext(AuthContext)
    // console.log(re)

    const [classes,setClasses] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/classes?uid=${user.uid}`)
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[re])
    // console.log(classes);
    return (
        <div>
            <div className='m-auto px-80 py-4 grid grid-cols-2 gap-6'>
            {classes.filter(nameclass=>nameclass.uid==user.uid) .map((name,index)=><THomeCard key={index} name={name}></THomeCard>)}
            </div>
        </div>
    );
};

export default THome;