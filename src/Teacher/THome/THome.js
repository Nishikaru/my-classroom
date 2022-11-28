import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Comp/UserContext/UserrContext';
import THomeCard from './THomeCard';

const THome = () => {
    const {user} = useContext(AuthContext)
    const [classes,setClasses]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    // console.log(classes);
    return (
        <div>
            {classes.filter(nameclass=>nameclass.uid==user.uid) .map((name,index)=><THomeCard key={index} name={name}></THomeCard>)}
        </div>
    );
};

export default THome;