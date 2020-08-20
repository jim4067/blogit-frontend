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

const update = async (id, blogObject) => {
  const config = {
    headers : {Authorization : token}
  }

  const response = await axios.put(`${baseUrl}/${id}`, blogObject, config);
  return response;
}

const remove = async (id) => {
  const config = {
    headers : {Authorization : token}
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response;
}

export default { setToken, getAll, create, update, remove}