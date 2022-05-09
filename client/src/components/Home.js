import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import TopBar from "./TopBar";


function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header>
   
     
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
             <h3>Logout</h3> 
            </button>
          </li>
        ) : (
          <>
            <li>
            <Link to='/login'>
              <h3>Login</h3> 
              </Link>
            </li>
            <li>
              <Link to='/signUp'>
               <h3>Register</h3> 
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Home