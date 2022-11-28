import React, { useContext } from 'react';
import { AuthContext } from '../../../Comp/UserContext/UserrContext';

const Profile = () => {
    const {user,LogOut} = useContext(AuthContext);
    const {displayName,photoURL} = user;
    console.log(user);
    return (
        <div>
            <img onClick={LogOut} className='w-9 h-9 border-2 border-indigo-600 rounded-md' title={displayName} src={photoURL} alt="" />
        </div>
    );
};

export default Profile;