import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  // state de la app
  const [ busqueda, guardarBusqueda ] = useState('');

  useEffect(() => {
    const consultarApi = async () => {
        if(busqueda === '' ) return;
        console.log('busqueda: '+busqueda);

        const imagenesPorPagina = process.env.React_App_Images_Per_Page;
        const key = process.env.React_App_Pixabay_Key;
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
        console.log('url: '+url);

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado.hits);

        guardarBusqueda(resultado.hits);
    }
    consultarApi();
  }, [busqueda])


  return (
  <div className="container">
    <div className="jumbotron">
      <p className="lead text-center">Image Finder</p>

      <Formulario
        guardarBusqueda={guardarBusqueda}
      />
    </div>
  </div>
  );
}

export default App;
