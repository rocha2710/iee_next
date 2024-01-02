import React from 'react';
import Menutopo from './Menutopo';
import { IoPeopleCircleOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";


const Topo = () => {
  return (
    <>
      <div className="top-bar pt-2  flex sm:flex-col grid grid-cols-10 gap-4 items-end">
       <div className="top-bar-logo col-span-3 pb-3"><img src="../LOGO_site-completo-branco.png" className="w-60 ml-auto"/></div>
       
       

       <div className="menu_topo_mobile text-cyan-900 block md:hidden self-start mt-4 mr-auto">
        <TfiMenuAlt  size={38} />
      </div>
       
       <div className="top-bar-menu col-span-7">
        <Menutopo/>
       </div>
       
      </div>
      <img src="../banner1.jpg" className="drop-shadow-2xl mx-auto border-yellow-300 border-4 w-1200"/>
      
    </>
  );
};

export default Topo;
