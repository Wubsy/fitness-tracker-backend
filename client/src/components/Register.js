

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { register, reset } from '../features/auth/authSlice';
import image from "../images/langston-register.jpg";


function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    password2: '',
    name: ""
  })

  const { userName, password, password2, name } = formData

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        userName,
        password,
        password2,
        name
      }

      dispatch(register(userData))
    }
  }


  return (
    <>
    <div style= {{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100vw",height:"100vh"}}>
      <section>
        <h1>
         Register
        </h1>
        <p>Please create a username</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='userName'
              name='userName'
              value={userName}
              placeholder='Enter your userName'
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
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <br></br>
          <div className='form-group'>
            <input
              type='name'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <br></br>
          <br></br>
          <div className="d-grid">
            <button type='submit' className='btn btn-secondary'>
              Submit
            </button>
          </div>
        </form>
        <div>Photo by <a href="https://unsplash.com/@langston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">@langston</a> on <a href="https://unsplash.com/s/photos/empty-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </div>
      </section>
      </div>
    </>
  )
}

export default Register