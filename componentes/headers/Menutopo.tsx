import React from 'react';


const Menutopo = () => {
    return(
        <>
<div className="menu-topo hidden md:block">
            {/* rounded-{t|r|b|l}{-size?} */}
            <div className="flex ">
    <button className="transition ease-in-out delay-150 rounded-t bg-gradient-to-r from-red-500 to-red-700  text-white font-bold py-2 px-4 hover:scale-110  duration-500">
        Home
    </button>
    <button className="rounded-t bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-2 px-4 ml-2 hover:scale-110  duration-500">
        Matrícula
    </button>
    <button className="rounded-t bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold py-2 px-4  ml-2 hover:scale-110  duration-500">
        Ed. Infantil
    </button>
    <button className="rounded-t bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-2 px-4 ml-2 hover:scale-110  duration-500">
        Fundamental I
    </button>
    <button className=" rounded-t bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-4  ml-2 hover:scale-110  duration-500">
        Tire suas Dúvidas
    </button>
</div>
</div>


</>
    );
}

export default Menutopo;