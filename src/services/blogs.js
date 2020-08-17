import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (blogObject) => {
  const config = {
    headers: {Authorization : token}
  }
  const response = axios.post(baseUrl, blogObject, config);
  return response;
} 

export default { getAll, setToken}