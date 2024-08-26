// copy code from done by me and paste and do necesary mdifications
import React, { useContext,useState,useEffect } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let[post,setPost]=useState({"title":"","body":"","cat":""})
  let[msg,setMsg]=useState("")
  useEffect(()=>{
    if(obj.data.token==""){
      navigate("/")
    }
    else{
      setPost(obj.data.item)
    }
  },[])

  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }

  let upd=()=>{
    axios.post("http://localhost:5000/upd",post).then((res)=>{
     navigate("/home/me")
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
        <button onClick={upd}>Updatepost</button>
      </div>
    </div>
  )
}

export default Edit