import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then(response => response.data)
}

const create = async (blogObject) => {
  const config = {
    headers: {Authorization : token}
  }

  const response = await axios.post(baseUrl, blogObject, config);
  return response;
} 

const update = async (blogObject) => {
  const config = {
    headers : {Authorization : token}
  }

  const response = await axios.put(baseUrl, blogObject, config);
  return response;
}

export default { getAll, setToken}