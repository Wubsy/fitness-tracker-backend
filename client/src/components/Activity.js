import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity } from '../features/acitivity/activitySlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { reset } from '../features/acitivity/activitySlice';
import TopBar from './TopBar';




function Activity() {
  const [activityData, setactivityData] = useState({
    "description":"",
    "duration":"",
    "date":''
  })
  
  const { description, duration, date } = activityData
  
  const dispatch = useDispatch()
  const navigate= useNavigate
  const { exercises, isError, isSuccess, message } 
= useSelector(
    (state) => state.exercises
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/test')
    }

    dispatch(reset())
  }, [exercises, isError, isSuccess, message, navigate, dispatch])
  const onChange = (e) => {
    setactivityData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  

  const onSubmit = (e) => {
    e.preventDefault()
    window.location.href = "/test"
    const activityData = {
      description,
      duration,
      date
    }
    

    dispatch(createActivity(activityData))
    
    
    
  }
   

  
  
  // const onChange = (e) => {
  //   setactivityData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   const activityData = {
  //     description,
  //     duration,
  //     date
  //   }

  //   dispatch(createActivity(activityData))
    
  // }

  return (<>
    <section>
      <h1>
       Keep Track Of Your Workouts
      </h1>
      <p>Please Enter workout Information</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='description'
              name='description'
              value={description}
              placeholder='Enter your activity name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='duration'
              name='duration'
              value={duration}
              placeholder='enter activity duration'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='name'
              className='form-control'
              id='date'
              name='date'
              value={date}
              placeholder='Enter activity date'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button onSubmit={onsubmit} >
              Submit
            </button>
          </div>
        </form>
      </section>
      </>
  )
}

export default Activity

