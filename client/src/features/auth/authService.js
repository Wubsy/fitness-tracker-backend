  
import axios from 'axios'

//const API_URL = "http://localhost:5000/routes/api/users/add"

// Register user
const register = async (userData) => {
  const response = await axios.post("http://localhost:5000/api/users/register", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


export default register