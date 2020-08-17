import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl);
  
  console.log(response.data);
  return response.data;
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

export default { setToken, getAll, create, update}