import React from 'react'

const Movie = (props) => {
  return (
    <div  className='movie'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>Years:{ props.year}</p>

    </div>
  )
}

export default Movie