import React from 'react'
import Nav from './Nav';

const Card = (props) => { // Destructuring props to get user
    console.log(props);
  return (
    <div className='m-1 bg-white text-black inline-block rounded-lg p-6 w-64 text-center'>
        <img className='ml-10 h-32 w-32 rounded-full mb-3' src={props.img} alt="" srcSet="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
        <h1 className='text-xl font-semibold mb-4'>{props.title}</h1>
        <h2>{props.city}, {props.age}</h2>
        <button type="button" className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>

        <Nav username={props.username} /> // Passing props to Nav component
    </div>
  )
}

export default Card