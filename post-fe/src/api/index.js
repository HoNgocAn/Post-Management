import axios from "axios";

const URL = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${URL}/posts/list`)
export const createPost = (payLoad) => axios.post(`${URL}/posts/create`, payLoad)
export const updatePost = (payLoad) => axios.put(`${URL}/posts/update`, payLoad)