import React from 'react'
import styles from './FeaturedMovie.module.css'


const FeaturedMovie = ({item}) => {
  return (
    <section className={`${styles.featured}`} style={{
      backgroundSize:'cover',
      backgroundPosition:"center",
      backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }} >
      <div className={`${styles.featured_Vertical}`}>
        <div className={`${styles.featured_Horizontal}`}>

        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie