import React, { useState } from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './comp/Nav'
import Home from './comp/Home'
import Login from './comp/Login'
import Reg from './comp/Reg'
import Edit from './comp/Edit'
import Add from './comp/Add'
import Logout from './comp/Logout'
import Ct from './comp/Ct'
import './App.css'
import Allpost from './comp/Allpost'
import News from './comp/News'
import Edu from './comp/Edu'
import Sports from './comp/Sports'
import Movies from './comp/Movies'
import Donebyme from './comp/Donebyme'
import Stared from './comp/Stared'

const App = () => {
  let[data,setData]=useState({"token":"","_id":"","name":""})
  let setlogin=(obj)=>{
    setData({...data,...obj})
  }
  let obj1={"data":data,"setlogin":setlogin}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj1}>
    <Nav/>
    <Routes>
      <Route path='/home' element={<Home/>}>
      <Route path='/home/' element={<Allpost/>}/>
      <Route path='/home/news' element={<News/>}/>
      <Route path='/home/edu' element={<Edu/>}/>
      <Route path='/home/sports' element={<Sports/>}/>
      <Route path='/home/movies' element={<Movies/>}/>
      <Route path='/home/me' element={<Donebyme/>}/>
      <Route path='/home/star' element={<Stared/>}/>
      </Route>
      <Route path='/' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App