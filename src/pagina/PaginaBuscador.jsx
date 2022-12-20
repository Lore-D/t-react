import Buscador from "../components/Buscador/Buscador";
import { Container } from "@mui/system";
import Loading from "../components/Loading/Loading";
import { ListaNoticias } from "../components/Noticias/Noticia";
import Paginador from "../components/Paginador/Paginador";
import { useState } from "react";
import { getListadoNoticias } from "../components/servicios/noticias";
// import { useEffect } from "react";

const PaginaBuscador = () => {
    const [noticias, setNoticias] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [paginaActual, setPaginaActual] = useState(1);
    const [criterioBusqueda, setCriterioBusqueda] = useState(''); 
    const [totalResultado, setTotalResultado] = useState(0);
    const [hayResultado, setHayResultado] = useState(false)
     

    const onBuscar = async (criterioBusqueda) => {
        setIsLoading(true);
        const { articles: notis, totalResults } = await getListadoNoticias(criterioBusqueda, paginaActual);
        
        setTotalResultado(totalResults)
        setHayResultado(Boolean(totalResults))
        setCriterioBusqueda(criterioBusqueda);
        setNoticias(notis);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
    };

    const onCambioPagina = (pagina) => {
        setPaginaActual(pagina);
        onBuscar(criterioBusqueda)
    };
    
    // console.log(noticias);
    return (
        <Container maxWidth ='sm'>
            <Buscador onBuscar={onBuscar}/>  
            { isLoading && <Loading /> }   

            { noticias && hayResultado && <h3>Resultado: 10 noticias de {totalResultado} resultados.</h3> }
            { noticias && <ListaNoticias noticias={noticias}/> }
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
            
        </Container>
    ) 
} 

export default PaginaBuscador; 