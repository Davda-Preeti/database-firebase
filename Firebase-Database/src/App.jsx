import { push, ref, set } from 'firebase/database'
import {BrowserRouter as Routers,Routes,Route} from 'react-router-dom'
import React from 'react'
// import db from './firebase-realtime/firebase'
import Create from './firebase-realtime/CRUD/Create'
import 'bootstrap/dist/css/bootstrap.css'
import View from './firebase-realtime/CRUD/View'
import Update from './firebase-realtime/CRUD/Update'
import CreateFire from './firebase-firestore/CRUD/createFire'
function App (){

  return (
    <>
    <Routers>
      <Routes>

        <Route path='/' element={<Create />}></Route>
        <Route path='/singleUser/:id' element={<View />}></Route>
        <Route path='insert' element={<CreateFire />}></Route>
        <Route path='/update/:id' element={<Update />}></Route> 
        
     
      </Routes>
    </Routers>
    </>
  )
}

export default App
