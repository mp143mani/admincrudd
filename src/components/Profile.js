import React from 'react'
import { Outlet,Link } from 'react-router-dom'
function Profile() {
  return (
    <div>
         <h1>Profile</h1>
        <ul>
            <li>
                <Link to='details'>
                <button className='btn btn-success'>Profile Details</button></Link>
                
            </li>
            <li>
                <Link to='reset-password'>
                <button className='btn btn-warning mt-2'>recovery password</button></Link>
                
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Profile