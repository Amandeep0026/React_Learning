import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const about = () => {
  const username = useContext(DataContext) 
  return (
    <div>
      <h1>About</h1>
      <h2>This will display the username '{username.name}' from UserContext</h2>
    </div>
  )
}

export default about