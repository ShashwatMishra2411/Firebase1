import React,{useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [isAuth, setisAuth] = useState(false)

  async function signup(email, password){
   await createUserWithEmailAndPassword(auth, email, password).then((user)=>{
    setCurrentUser(user.user.email);
    setisAuth(true)
   }).catch((e)=>{
    console.log(e.message)
   });
  }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      setCurrentUser(user)
    })

    return unsubscribe
  },[])

  const value = {
    currentUser,
    signup,
    isAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}