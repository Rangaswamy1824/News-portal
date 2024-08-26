import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Home = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token==""){
      navigate("/")
    }
  },[])
  return (
    <div className='con'>
      <div className='sidemenu'>
        <Link to="/home/">All posts</Link>
        <Link to="/home/me">Done by me</Link>
        <Link to="/home/star">Starred</Link>
        <Link to="/home/movies">movies</Link>
        <Link to="/home/edu">Education</Link>
        <Link to="/home/news">News</Link>
        <Link to="/home/sports">Sports</Link>
      </div>

      <div className='maincon'>
      <Outlet/>
      </div>
      <div className='adv'>
        {/* add $autoplay=1 in iframes to get Autoplay */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/e5BbHPHpbvE?si=coMVk2ryjFxHgXlx&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/gz1h9bn3yP0?si=dQeCpE-aCEogTmm3&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </div>
  )
}

export default Home