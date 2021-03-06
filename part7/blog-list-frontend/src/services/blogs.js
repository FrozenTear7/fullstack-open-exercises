import axios from 'axios'

const baseUrl = '/api/blogs'

const getAllBlogs = async () => {
  const res = await axios.get(baseUrl)

  return res.data
}

const updateBlog = async (blog) => {
  const res = await axios.put(`${baseUrl}/${blog.id}`, blog)

  return res.data
}

const createBlog = async (blog) => {
  const res = await axios.post(baseUrl, blog)

  return res.data
}

const deleteBlog = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

const createComment = async (id, comment) => {
  const res = await axios.post(`${baseUrl}/${id}/comments`, comment)

  return res.data
}

export default {
  getAllBlogs,
  updateBlog,
  createBlog,
  deleteBlog,
  createComment,
}
