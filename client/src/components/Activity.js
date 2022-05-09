import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity } from '../features/acitivity/activitySlice'
import 'bootstrap/dist/css/bootstrap.min.css';


function Activity() {
  const [activityData, setactivityData] = useState({
    "description":"",
    "duration":"",
    "date":''
  })
  
  const { description, duration, date } = activityData
  const dispatch = useDispatch()
  
  const onChange = (e) => {
    setactivityData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const activityData = {
      description,
      duration,
      date
    }

    dispatch(createActivity(activityData))
    
  }

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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
      </>
  )
}

export default Activity

