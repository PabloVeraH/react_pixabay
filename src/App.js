import React from 'react';
import Formulario from './components/Formulario';

function App() {
  console.log(process.env.React_App_Title);

  return (
  <div className="container">
    <div className="jumbotron">
      <p className="lead text-center">Image Finder</p>

      <Formulario />
    </div>
  </div>
  );
}

export default App;
