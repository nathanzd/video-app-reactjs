import React from 'react'
import styles from './FeaturedMovie.module.css'


const FeaturedMovie = ({item}) => {
  return (
    <div>{item.name}</div>
  )
}

export default FeaturedMovie