import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

function LogIn() {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
   
  })

  const { userName, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
 
  useEffect(() => {
     
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
     

      navigate('/test')


    }
    dispatch(reset())
   
  }, [user, isError, isSuccess, message, navigate, dispatch])
  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    const userData = {
      userName,
      password
    }
    
  
    dispatch(login(userData))
  }
  
  
  return (
    <>
      <section >
        <h3>
          Sign in and start keeping track of your workouts!
        </h3>
        
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='userName'
              className='form-control'
              id='useName'
              name='userName'
              value={userName}
              placeholder='Enter your username'
              onChange={onChange}
            />
          </div>
          <br></br>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
         <br></br>
         <br></br>
          <div className="d-grid">
            <button type='submit' className='btn btn-secondary'>
              Log In
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default LogIn;