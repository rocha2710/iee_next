import { Main } from 'next/document';
import React from 'react';


const  Contentpage = () => {
return(
    
<>
<div className="container-page bg-gradient-to-r from-cyan-50 via-white  to-bg-blue-50 shadow-lg shadow-cyan-400/20 flex grid grid-cols-10">
  <main className="col-span-7">
    <h2>Eventos</h2>
  </main>
  <aside className="col-span-3">
    <h2>Mural</h2>
    <p>Teste de texto.</p>
  </aside>
</div>
</>
)};

export default Contentpage;