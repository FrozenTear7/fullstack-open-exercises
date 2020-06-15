import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const handleOnSubmitAnecdote = (event) => {
    event.preventDefault()

    if (content) {
      dispatch(createAnecdote(content))

      dispatch(setNotification('Successfully added new anecdote'))
      setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)

      setContent('')
    }
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleOnSubmitAnecdote}>
        <div>
          <input
            onChange={({ target }) => setContent(target.value)}
            value={content}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm