
   
import axios from 'axios'

const API_URL = "http://localhost:5000/api/activity/"

// Create new activity/workout
const createActivity = async (activityData, token) => {
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  }

  const response = await axios.post(API_URL + "add", activityData, config)

  return response.data
}
const activityService = {
    createActivity
  }
  
  export default activityService