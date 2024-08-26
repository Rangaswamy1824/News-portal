import React, { useContext, useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'


const Add = () => {

  let obj=useContext(Ct)
  let navigate=useNavigate()
  let[post,setPost]=useState({"title":"","body":"","cat":""})
  let[msg,setMsg]=useState("")
  useEffect(()=>{
    if(obj.data.token==""){
      navigate("/")
    }
  },[])

  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }

  let add=()=>{
    axios.post("http://localhost:5000/addpost",{...post,"uid":obj.data._id,"name":obj.data.name,"date":new Date().toLocaleDateString()}).then((res)=>{
      setMsg(res.data.msg)
      setPost({"title":"","body":"","cat":""})
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' name='title' placeholder='enter title' onChange={fun} value={post.title}/>
        <textarea  className='textarea' name='body' onChange={fun} value={post.body}></textarea>
        <select name='cat' value={post.cat} onChange={fun}>
          <option value="" selected disabled>select cat</option>
          <option value="edu">Education</option>
          <option value="ent">movies</option>
          <option value="sports">sports</option>
          <option value="news">News</option>
        </select>
        <button onClick={add}>Addpost</button>
      </div>
    </div>
  )
}

export default Add