import { useDispatch } from 'react-redux'
import { deleteActivity } from '../features/acitivity/activitySlice'
// import { useNavigate } from 'react-router'
// const navigate=useNavigate


function ActivityItem({ exercise, token }) {
  const dispatch = useDispatch()
 
  return (
    <div>
      <h3>{exercise.date}</h3>
      <h2>{exercise.description}</h2>
      <h2>{exercise.duration}</h2>
      <button onClick={() => dispatch(deleteActivity(exercise, token))}>
        X
      </button>
    </div>
  )
}

export default ActivityItem