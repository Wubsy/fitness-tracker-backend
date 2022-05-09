import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import image from "../images/ben-warren-home.jpg";


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
   <div style= {{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100vw",height:"100vh"}}>
     
      <ul>
        {user ? (
         <div className="d-grid">
            <button className='btn btn-secondary' onClick={onLogout}>
              Logout
            </button>
            </div>
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
      </div>
    </header>
  )
}

export default Home