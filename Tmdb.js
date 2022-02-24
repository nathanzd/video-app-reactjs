const API_KEY='870b4d2ec9bee37ee1bc2183dc65da6b'
const API_BASE='https://api.themoviedb.org/3/'



const basicFetch=async ()=>{
    
}

export default {
     getHomeList:()=>{
         return[
             {
                 slug:'originals',
                 title:'Originais Netflix',
                 items:[]
             },
             {
                slug:'trendings',
                title:'Recomendados para você',
                items:[]
            },
            {
                slug:'toprated',
                title:'Em alta',
                items:[]
            },
            {
                slug:'action',
                title:'Ação',
                items:[]
            },
            {
                slug:'comedy',
                title:'Comédia',
                items:[]
            },
            {
                slug:'horror',
                title:'Terror',
                items:[]
            },
            {
                slug:'romance',
                title:'Romance',
                items:[]
            },
            {
                slug:'cdocumentary',
                title:'Documentários',
                items:[]
            }
         ]
     }
}