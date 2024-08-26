import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Logout = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    obj.setlogin({"token":"","_id":"","name":""})
    navigate("/")
  },[])
  return (
    <div>Logout</div>
  )
}

export default Logout