import axios from 'axios'

axios.interceptors.request.use((config) => {
  const { token } =
    JSON.parse(window.localStorage.getItem('loggedBlogappUser')) || ''

  if (token) {
    config = {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${token}` },
    }
  }

  return config
})
