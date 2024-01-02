import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="top-bar flex grid grid-cols-10 gap-4 p-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white text-sm">
      <div className="col-span-2 flex items-center">
        <FaWhatsapp size={24} />
        <span>(98)90000-0000</span>
      </div>
      <div className="col-span-7 flex items-center">
        <LuMapPin size={24} />
        <span>Rua 16, Q33, C29 - Cohatrac Residencial Primavera</span>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <span className="hover:bg-gradient-to-r from-pink-500 to-cyan-400 rounded"><FaInstagram size={24}  /></span>
        <span className="ml-2 hover:bg-gradient-to-r from-blue-500 to-cyan-400 rounded"><FaFacebook size={24} /></span>
      </div>
    </div>
  );
};

export default Topbar;
