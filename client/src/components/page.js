import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ActivityItem from './getactivity'
import { getActivity, reset } from '../features/acitivity/activitySlice'
import TopBar from './TopBar'
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { exercises, isLoading, isError, message } = useSelector(
    (state) => state.exercises
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getActivity())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  return (
    <>
     
      <section className='heading'>
     
       <h1> {user.user}</h1>
        <p>Workout Log</p>
      </section>

      <section className='content'>
        {exercises.length > 0 ? (
          <div className='exercise'>
            {exercises.map((exercise) => (
              <ActivityItem key={exercise._id} exercise={exercise} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}
export default Dashboard