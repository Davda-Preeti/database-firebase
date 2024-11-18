import dbFireStore from '../firestore'
import {addDoc,collection, deleteDoc,doc, getDoc } from 'firebase/firestore'
import { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'

const CreateFire = () => {
    const { register, handleSubmit, reset } = useForm()
    const[users,setUser]=useState([])
   
    //data insert
    async function submitData(data) {
        console.log(data)
        await addDoc(collection(dbFireStore,"user"),data)
        reset()
        alert("data inserted")
        showFirebase()
    }

    //get data
    async function showFirebase() {
        const res =await getDoc(collection(dbFireStore,"user"));
        let arr=[]
        res.forEach((doc)=>{
            const newUser={
                id:doc.id,
                ...doc.data()
            }
            arr.push(newUser)
        })
        console.log(newUser)
        setUser(arr)
    }
  useEffect(()=>{
    showFirebase()
  },[])
    }
    async function trash(id) {
      await deleteDoc (doc(dbFireStore,"user",id))
     alert("deleted")
      showFirebase()
   

return(
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
export default CreateFire