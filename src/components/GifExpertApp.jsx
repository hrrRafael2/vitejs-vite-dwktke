import { useState } from 'react';

function GifExpertApp() {
  /**
   *
   *  useState
   */
  const [categorias, setCategorias] = useState(['One Puch']);

  return (
    <>
      <h1>Hi</h1>
      <ol>
        {  categorias.map( categorias => {}  ) }
        <li>1</li>
      </ol>
    </>
  );
}

export default GifExpertApp;
