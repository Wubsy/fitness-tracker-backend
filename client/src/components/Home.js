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
            <h3>Logout</h3> 
            </button>
            </div>
        ) : (
          <>
             <li>
              <Link to='/login'>
              <h3>Log in</h3> 
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
      </div>
      <div>Photo by <a href="https://unsplash.com/@ben.warren?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Warren</a> on <a href="https://unsplash.com/s/photos/empty-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </div>
    </header>
    
  )
}

export default Home