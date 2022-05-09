import { useDispatch } from 'react-redux'
import { deleteActivity } from '../features/acitivity/activitySlice'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@restart/ui/esm/Button';
// import { useNavigate } from 'react-router'
// const navigate=useNavigate


function ActivityItem({ exercise, token }) {
  const dispatch = useDispatch()
 
  return (
    <div>
      
          {/* <h2>{exercise.description}</h2>
      <h4>{exercise.date}</h4>
      <h3>{exercise.duration}</h3>
      <button onClick={() => dispatch(deleteActivity(exercise, token))}>
        X
      </button>  */}

      <table>
  <tr>
    <th>Exercice Name</th><br/>
    <th>Duration</th><br/>
    <th>Date</th>
  </tr>
  <tr>
    <td>{exercise.description}</td>
    <td>{exercise.duration} minutes</td><br/>
    <td>{Date(exercise.date.toDateString)}</td>
  </tr>
    </table>  
    <button onClick={() => dispatch(deleteActivity(exercise, token))} className='close'>
        X
      </button>    
    </div>
  )
}

export default ActivityItem