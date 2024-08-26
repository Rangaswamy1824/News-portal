import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ct from './Ct'

const Login = () => {
  let[user,setUser]=useState({"_id":"","pwd":""})
  let[msg,setMsg]=useState("")
  let navigate=useNavigate()
  let fun=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  let obj=useContext(Ct)

  let login=()=>{
    axios.post("http://localhost:5000/login",user).then((res)=>{
      if(res.data.token!=undefined){
        obj.setlogin(res.data)
        navigate("/home")
      }
      else{
        setMsg(res.data.msg)
      }
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
      <div className='msg'>{msg}</div>
      <input type='text' name="_id" value={user._id} onChange={fun} placeholder='email'/>
      <input type='password' name="pwd" value={user.pwd} onChange={fun} placeholder='pwd'/>
      <button onClick={login}>Login</button>
      </div>
      
    </div>
  )
}

export default Login