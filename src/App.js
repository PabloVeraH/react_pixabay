import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  // state de la app
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
        if(busqueda === '' ) return;

        const imagenesPorPagina = process.env.React_App_Images_Per_Page;
        const key = process.env.React_App_Pixabay_Key;
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarImagenes(resultado.hits);
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

    <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />
    </div>
  </div>
  );
}

export default App;
