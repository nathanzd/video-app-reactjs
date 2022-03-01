import React from 'react'
import styles from './FeaturedMovie.module.css'


const FeaturedMovie = ({item}) => {
  let firstDate=new Date(item.first_air_date);
  let genres=[];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }
  

  return (
    <section className={`${styles.featured}`} style={{
      backgroundSize:'cover',
      backgroundPosition:"center",
      backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }} >
      <div className={`${styles.featured_Vertical}`}>
        <div className={`${styles.featured_Horizontal}`}>
          <div className={`${styles.featured_Name}`}>{item.original_name}</div>
          <div className={`${styles.featured_Info}`}>
              <div className={`${styles.featured_Points}`}>{item.vote_average} Pontos</div>
              <div className={`${styles.featured_Year}`}>{firstDate.getFullYear()}</div>
              <div className={`${styles.featured_Seasons}`}>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's':''}</div>
          </div>
          <div className={`${styles.featured_Description}`}><p>{item.overview.length < 160 ? item.overview:item.overview.substr(0,159)+'...'}</p></div>
          <div className={`${styles.buttons}`}>
              <a href={`watch/${item.id}`}className={`${styles.featured_Play}`} >► Assitir</a>
              <a href={`list/add/${item.id}`} className={`${styles.featured_AddList}`} >+ Minha Lista</a>
          </div>
          <div className={`${styles.featured_Genres}`}><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie