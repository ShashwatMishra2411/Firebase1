import React from 'react'
import {useAuth} from './contexts/AuthContext'

export default function Login() {
    const {currentUser} = useAuth()
  return (
    <div>
      {currentUser}
    </div>
  )
}
