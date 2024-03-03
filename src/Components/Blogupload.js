import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const Blogupload = () => {
    const [title,settitle] = useState('')
    const [img,setimg] = useState('')
    const [desc,setdesc] = useState('')
    const [category,setcategory] = useState('')
  const changehandler = (e)=>{
    e.preventDefault()
    axios.post('https://blog-data-nine.vercel.app/blogpost',{title,category,img,desc})
    .then((result)=>{
       console.log('data is save successfully')
       alert('data is saved')
    })
    .catch(e=>{
       console.log(e)
       console.log('failed to save data on database')
    })
    
  }

  return (
    <div>
      <Navbar/>
    <div className='blogupload'>
      <form action="" onSubmit={changehandler}>
        <div className='title-box'>
            <label htmlFor="">Title</label>
            <input type="text" className='blog-title-upload' name="" id="" onChange={(e)=>settitle(e.target.value)}/>
        </div>
        <div className='title-box'>
            <label htmlFor="">Category</label>
            <input type="text" className='blog-title-upload' name="" id="" onChange={(e)=>setcategory(e.target.value)}/>
        </div>
        <div className='img-box'>
            <label htmlFor="">imageurl</label>
            <input type="text" className='blog-title-upload' onChange={(e)=>setimg(e.target.value)}/>
        </div>
        <div className='desc-box'> 
            <label htmlFor="">description</label>
            <textarea name="" id="" cols="150" rows="10" onChange={(e)=>setdesc(e.target.value)}></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Blogupload
