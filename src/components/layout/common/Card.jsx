import React from 'react'

export const Card = ({title, img, language, director, protagonists, description, country}) => {
  return (
    <div className='card'>
      <h2 className='card__title card__item'>{title}</h2>

      <img src={img} alt="" className='card__img card__item'/>

      <div className='card__movie-meta card__item'>
        <p className='card__movie-meta__language'>{language}</p>
        <p className='card__movie-meta__director'>{director}</p>
        <p className='card__movie-meta__country'>{country}</p>
        <p className='card__movie-meta__protagonists'>{protagonists}</p>
      </div>
      
    </div>
  )
}
