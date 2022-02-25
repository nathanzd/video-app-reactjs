import ReactDOM from 'react-dom';
import React from 'react';
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';


/*
                Header
                Destaque
                listas
                rodape
*/

export const App=()=>{
    const [movieList,setMovieList]=React.useState([])
    const [featuredData,setFeaturedData]=React.useState(null);

    React.useEffect(()=>{
        const loadAll=async ()=>{
            //Getting the list of movies
            let list=await Tmdb.getHomeList();
            setMovieList(list)

            //Getting the Featured movie
            let original=list.filter(i=>i.slug === 'originals');
            let randomChosen=(Math.floor(Math.random() * (original[0].items.results.length - 1 )))
            let chosen=original[0].items.results[randomChosen];
            setFeaturedData(chosen)
            console.log(chosen)
        }
        loadAll();
    },[])

    return(
        <React.Fragment>
            <div className={`page`}>
                {featuredData && <FeaturedMovie item={featuredData}/>}
                <section className={`lists`}>
                    {movieList.map((item,key)=>{
                       return (
                        <MovieRow key={key} title={item.title} items={item.items}/>
                        )
                    })}
                </section>

            </div>
        </React.Fragment>
        
    )
}



export default App