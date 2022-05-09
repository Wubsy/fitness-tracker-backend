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
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                 Login
              </Link>
            </li>
            <li>
              <Link to='/signUp'>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Home