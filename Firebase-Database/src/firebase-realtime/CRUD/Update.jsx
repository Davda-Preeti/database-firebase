import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { get,set,ref} from 'firebase/database'
import db from '../firebase'

const Update = () => {
    const{id}=useParams()
    const redirect=useNavigate()
    const{register,handleSubmit,reset}=useForm()
    async function singleUser() {
        const res=await get(ref(db,`rnw/students/${id}`))
        console.log(res.val())
        reset(res.val())
    }
    useEffect(()=>{
        singleUser()
    },[id])
    async function submitData(data){
      console.log(data)
        await set(ref(db,`rnw/students/${id}`),data)
        redirect('/')
    } 
  return (
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
  )
}

export default Update
