import React from 'react';
import Menutopo from './Menutopo';
import { IoPeopleCircleOutline } from "react-icons/io5";


const Topo = () => {
  return (
    <>
      <div className="top-bar pt-2  flex flex-col grid grid-cols-10 gap-4 items-end">
       <div className="top-bar-logo col-span-3 pb-3"><img src="../LOGO_site-completo-branco.png" className="w-60 ml-auto"/></div>
       <div className="top-bar-menu col-span-6">
       <Menutopo/>
       </div>
       <div className="top-bar-login col-span-1 self-start mr-auto text-xs text-white">
          <button><IoPeopleCircleOutline size={24} />Login</button>
       </div>
      </div>

      
      <img src="../banner1.jpg" className="mx-auto border-yellow-300 border-4 w-1200"/>
      
    </>
  );
};

export default Topo;
