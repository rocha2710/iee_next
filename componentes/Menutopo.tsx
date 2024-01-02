import React from 'react';

const Menutopo = () => {
    return(
<div className="menu-topo">
            {/* rounded-{t|r|b|l}{-size?} */}
            <div className="flex ">
    <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
        Home
    </button>
    <button className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2">
        Matrícula
    </button>
    <button className="bg-yellow-300 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-2">
        Ed. Infantil
    </button>
    <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2">
        Fundamental I
    </button>
    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-2">
        Tire suas Dúvidas
    </button>
</div>


</div>

    );
}

export default Menutopo;