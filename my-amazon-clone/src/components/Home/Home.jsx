import React, { useReducer } from 'react'
import './Home.css'


const reducer = (state, action) => {
  if (action.type === 'increment') {
    return state + 1

  }
  if (action.type === 'dicrement') {
    return state- 1
  }
}


const Home = () => {
  const initialValue = 0;

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className='home-container'>
      <p style={{ color: 'white', fontSize: '45px', margin: '55px', position: "absolute" }}>{state}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>inc</button>
      <button onClick={() => dispatch({ type: 'dicrement' })}>dic</button>
    </div>
  )
}

export default Home