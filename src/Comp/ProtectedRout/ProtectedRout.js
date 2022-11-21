import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserrContext';

const ProtectedRout = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div class="bg-indigo-500">
        <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
        </svg>
        Processing...
      </div>
    }
    if(user&&user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>


};

export default ProtectedRout;