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



// import { useNavigate } from 'react-router';
// const navigate=useNavigate


import image from "../images/mikel-parera-activity.jpg";



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
  <div style= {{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100vw",height:"100vh"}}>
    <section>
      <h3>
       Keep Track of Your Workouts
      </h3>
      <p>Please enter your workout information</p>
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
          <br></br>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='duration'
              name='duration'
              value={duration}
              placeholder='Enter the amout of time you spent doing this activity'
              onChange={onChange}
            />
          </div>
          <br></br>
          <div className='form-group'>
            <input
              type='name'
              className='form-control'
              id='date'
              name='date'
              value={date}
              placeholder='Enter the date you did this activity'
              onChange={onChange}
            />
          </div>


          <br></br>
          <br></br>
          <div className="d-grid">
          
            <button onSubmit={onsubmit} className='btn btn-secondary'>

              Submit
            </button>
          
          </div>
        </form>
        <div>Photo by <a href="https://unsplash.com/@mikel.perera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikel Parera</a> on <a href="https://unsplash.com/s/photos/empty-plate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
      </section>
      </div>
      </>
  )
}

export default Activity

