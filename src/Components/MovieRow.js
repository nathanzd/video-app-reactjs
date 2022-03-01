import React from 'react'
import styles from './MovieRow.module.css'
import NavigateBeforeSVG from '../SVG_Component/NavigateBeforeSVG'
import NavigateNextSVG from '../SVG_Component/NavigateNextSVG'

const MovieRow = ({title,items}) => {
  const[scrollX,setScrollX]=React.useState(0);
  const handleLeftArrow=()=>{
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x=0
      
    }
    setScrollX(x)
    
    
  }
  const handleRightArrow=()=>{
    let x = scrollX - Math.round(window.innerWidth / 2);
    let ListW= items.results.length * 150;
    if((window.innerWidth - ListW) > x){
      x=(window.innerWidth - ListW) - 60;

    }
    setScrollX(x);
  }



  return (
    <div className={`${styles.movieRow}`}>
      <h2>{title}</h2>

      <div className={`${styles.MovieRowLeft}`} onClick={handleLeftArrow}>
          <NavigateBeforeSVG/>
      </div>

      <div className={`${styles.MovieRowRight}`} onClick={handleRightArrow}>
          <NavigateNextSVG/>
      </div>

      <div className={`${styles.movieRowListArea}`}>
        <div className={`${styles.movieRowList}`} style={{
          marginLeft:scrollX,
          width:items.results.length * 150
          }}>
          {items.results.length > 0 && items.results.map((item,key)=>(
            <div key={key} className={`${styles.movieRowItem}`}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow