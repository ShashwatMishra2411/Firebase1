import React from 'react';
import Singup from './Signup';
import Login from './Login';
import Home from './Home'
import {Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Singup></Singup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route exact path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}
