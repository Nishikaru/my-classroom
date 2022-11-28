import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    // loading
    const [loading,setLoading] = useState(true)
    // user
    const [user,setuser]=useState({})
    // signup with email
    const signupWithEmail=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // add name anr photo url
    const updateName = (profile)=>{
        console.log(profile)
        return updateProfile(auth.currentUser,profile)
    }
    // login with email
    const loginWithMail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google signin here
    const gProvider =new GoogleAuthProvider();

    const goWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,gProvider);
    }
    // logout here
    const LogOut = ()=>{
        return signOut(auth)
    }

// re rendering

const [re,setRe] = useState(0);

// holding data
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setuser(currentUser);
        setLoading(false);
    })
    return ()=>{ unsubscribe()}
},[])

    // sending data from here
    const info ={setLoading,loading,user,signupWithEmail,updateName,loginWithMail,goWithGoogle,LogOut,re,setRe}
    return (
        <div>
            <AuthContext.Provider value={info} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;