import ReactDOM from 'react-dom';
import React from 'react';
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';
import Loading from './Assets/loading.gif'

/*
                Header
                Destaque
                listas
                rodape
*/

export const App=()=>{
    const [movieList,setMovieList]=React.useState([])
    const [featuredData,setFeaturedData]=React.useState(null);
    const [blackHeader,setBlackHeader]=React.useState(false);


    //Fetch Movies and FeaturedMovie
    React.useEffect(()=>{
        const loadAll=async ()=>{
            //Getting the list of movies
            let list=await Tmdb.getHomeList();
            setMovieList(list)

            //Getting the Featured movie
            let original=list.filter(i=>i.slug === 'originals');
            let randomChosen=(Math.floor(Math.random() * (original[0].items.results.length - 1 )))
            let chosen=original[0].items.results[randomChosen];
            let chosenInfo=await Tmdb.getMovieInfo(chosen.id,'tv')     
            setFeaturedData(chosenInfo)
            
        }
        loadAll();
    },[])

    //Scroll Listener
    React.useEffect(()=>{
        const scrollListener=()=>{
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false)
            }
        }
        window.addEventListener('scroll',scrollListener)

        return ()=>{
            window.removeEventListener('scroll',scrollListener)
        }
    },[])


    return(
        <React.Fragment>
            <div className={`page`}>
                <Header black={blackHeader}/>
                {featuredData && <FeaturedMovie item={featuredData}/>}
                <section className={`lists`}>
                    {movieList.map((item,key)=>{
                       return (
                        <MovieRow key={key} title={item.title} items={item.items}/>
                        )
                    })}
                </section>
                <footer style={{display:'flex',justifyContent:'center'}}>
                    Feito Por nathanzd usando ReactJs.<br/>
                    Todos os dados foram fornecidos pela API do TheMovieDataBase
                </footer>

                {movieList.length <= 0 && 
                <div className={`loading`}>
                    <img src={Loading} alt='carregando'/>
                </div>}
                
            </div>
        </React.Fragment>
        
    )
}



export default App