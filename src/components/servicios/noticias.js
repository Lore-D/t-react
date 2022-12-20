// const API_KEY = '1ae1447e348343e3bdc6f0b6e92688d5';
const OMDB_API = 'https://newsapi.org/v2/everything'; 
const PAGE_SIZE = '10';
const LANGUAGE = 'es';   

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?q=${criterioBusqueda}&page=${paginaActual}&pageSize=${PAGE_SIZE}&language=${LANGUAGE}&apiKey=1ae1447e348343e3bdc6f0b6e92688d5`);
    const noticias = await respuesta.json();
    console.log(noticias);
    return noticias;
}






// &apiKey=${API_KEY}





























// const SUPERHEROES_URL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// export const getSuperHeroes = async () => {
//     const respuesta = await fetch(SUPERHEROES_URL);
//     return respuesta.json();          
// };


// https://newsapi.org/v2/everything?q=keyword&apiKey=1ae1447e348343e3bdc6f0b6e92688d5