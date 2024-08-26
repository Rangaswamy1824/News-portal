import React, { useState } from 'react'
import axios from 'axios'

const Reg = () => {
    let[user,setuser]=useState({"_id":"","name":"","pwd":"","gen":"","phno":"","dob":"","state":""})
    let[msg,setmsg]=useState("")

    let fun=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    
    let add=()=>{
        axios.post("http://localhost:5000/reg",user).then((res)=>{
            setmsg(res.data.msg)
            setuser({"_id":"","name":"","pwd":"","gen":"","phno":"","dob":"","state":""})
        })

    }
    
  return (
    <div className='formcon'>
        <div className='form'>
            <div className='msg'>{msg}</div>
            <input type='text' placeholder='email' name="_id" value={user._id} onChange={fun}/>
            <input type='text' placeholder='name' name="name" value={user.name} onChange={fun}/>
            <input type='password' placeholder='password' name="pwd" value={user.pwd} onChange={fun}/>
            <input type='text' placeholder='phone num' name="phno" value={user.phno} onChange={fun}/>
            <input type='date' name="dob" value={user.dob} onChange={fun}/>
         <div>
           gender:<input type="radio" name="gen" value="male" onChange={fun} checked={user.gen=="male"}/>male
           <input type='radio' name="gen" value="female" onChange={fun} checked={user.gen=="female"}/>female
        </div>

           <select name="state" value={user.state} onChange={fun}>
            <option selected disabled value="">select any one state</option>
            <option value="ap">Andhra pradesh</option>
            <option value="ts">telangana</option>
            <option value="mh">maharashtra</option>

           </select>
        <button onClick={add}>Register</button>
        </div>

    </div>
  )
}

export default Reg