import { push, ref, set ,get,remove} from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import db from '../firebase'
import { NavLink } from 'react-router-dom'

const Create = () => {
  const { register, handleSubmit, reset } = useForm()
  const[users,setUser]=useState([])
  function submitData(data) {
    set(push(ref(db, 'rnw/students')), data)
    alert("data has been inserted"),
      reset()
      showFirebase()
  }
  async function showFirebase() {
    const res=await get(ref(db,'rnw/students'))
    console.log(res.val())
    const obj=res.val();
    var arr=[]
    
    for(var key in obj){
      console.log(key)
      console.log(obj[key])
      const newUser={
        id:key,
        ...obj[key]
      }
      console.log("newUser.....")
      console.log(newUser)
      arr.push(newUser)
    }
    console.log("arr......")
    console.log(arr)
    setUser(arr)
  }
  useEffect(()=>{
    showFirebase()
  },[])
  async function trash(id) {
    if(confirm ("do you want to delete this item?")){
      const res=ref(db,`rnw/students/${id}`)
      await remove(res)
      showFirebase()
    }
  }
  return (
    <>
      <div className='col-lg-6 mx-auto my-5 p-5 shadow'>
        <form action="" method='post' onSubmit={handleSubmit(submitData)}>
          <div className="mt-4">
            <input type="text" {...register('username')} className='form-control' placeholder='Enter your name' />
          </div>
          <div className="mt-4">
            <input type="text" {...register('email')} className='form-control' placeholder='Enter your email' />
          </div>
          <div className="mt-4">
            <input type="text" {...register('mobile')} className='form-control' placeholder='Enter your mobile' />
          </div>
          <div className="mt-4">
            <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>

      <div className='container my-5 '>
        <table className='table table-hover table-striped table-success'>
          <thead className='table-dark'>
            <tr>
              <th>S.no</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                <td>
                <button onClick={()=>trash(user.id)} className='btn btn-danger'>Delete</button>
                <NavLink className='btn btn-info mx-4' to={`singleUser/${user.id}`}>View</NavLink>
                <NavLink className='btn btn-warning mx-4' to={`update/${user.id}`}>Edit</NavLink>

                </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Create
