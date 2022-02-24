import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'
import './App.css'




export const App=()=>{
    const [data,setData]=React.useState(null)

    async function basicFetch(){
        const response=await fetch("https://api.themoviedb.org/3/movie/550?api_key=870b4d2ec9bee37ee1bc2183dc65da6b")
        const json=await response.json();
        setData(json);
        console.log(data && data.poster_path)
        
    }

    return(
        <React.Fragment>
            <button onClick={basicFetch}>Clique</button>
           {data && <img src={data.poster_path}/>}
        </React.Fragment>
        
    )
}



export default App