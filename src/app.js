import ReactDOM from 'react-dom';
import React from 'react';
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow';


/*
                Header
                Destaque
                listas
                rodape
*/

export const App=()=>{
    const [movieList,setMovieList]=React.useState([])

    React.useEffect(()=>{
        const loadAll=async ()=>{
            //Getting the list of movies
            let list=await Tmdb.getHomeList();
            setMovieList(list)
        }
        loadAll();
    },[])

    return(
        <React.Fragment>
            <div className={`page`}>
                <section className={`lists`}>
                    {movieList.map((item,key)=>{
                       return (
                        <MovieRow key={key}/>
                        )
                    })}
                </section>

            </div>
        </React.Fragment>
        
    )
}



export default App