import React from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext'
export default function Home() {
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
      try {
        await logout();
        navigate(-1);
      } catch (error) {
        console.log(error.message);
      }
    }
  return (
    <div>
      {!currentUser ? <Navigate to="/login"/> : null}
      {currentUser}
      <Link to="update-profile">Click here</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
