import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../queries/userQueries'

const LoginForm = ({ setError, setToken, loadUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login, result] = useMutation(LOGIN_USER, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    },
  })

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('loggedLibraryToken', token)
      loadUser()
    }
  }, [result.data, setToken, loadUser])

  const handleLoginSubmit = (event) => {
    event.preventDefault()

    login({ variables: { username, password } })
  }

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          username{' '}
          <input
            type="test"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password{' '}
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm
