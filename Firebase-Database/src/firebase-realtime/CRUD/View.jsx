import {  ref ,get} from 'firebase/database'
import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { useParams } from 'react-router-dom'

const View = () => {
  const[user,setUser]=useState({})
  const{id}=useParams()
  async function singleUser() {
    const res=await get (ref(db,`rnw/students/${id}`))
    console.log(res.val())
    setUser(res.val())
  }
  useEffect(()=>{
    singleUser()
  },[id])
  return (
    <div>
      <h1>SingleView</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.mobile}</li>
      </ul>
    </div>
  )
}

export default View
