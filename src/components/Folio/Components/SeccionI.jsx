import React from "react";

const SeccionI=()=>{
    return(
            <section>
            
                <div className="container mx-auto w-9/12 text-left">
                    <a name={1} href="/"  > </a>
                    <p className="text-cyan-600 font-bold mb-4 mt-[3rem]"> Hola, que tal Soy</p>
                    <h1 className="text-gray-300 text-4xl sm:text-6xl mb-5 font-bold">Elvis Aguilera Santur.</h1>
                    <h2 className="text-gray-400 text-4xl sm:text-5xl mb-5 font-bold">Desarrollo cosas Web y Desktop...!</h2>
                    <p className="text-gray-300 mb-5 text-1xl">
                        <span className="text-cyan-600">Desarrollador Front end Jr, </span>me gusta dar<br/>
                        y desarrollar mejoras informáticas, considero mi experiencia de apoyo<br/>
                        en dos sistemas Desktop y un par Web como boleto de mi integración en tu<br/>
                        empresa o en brindarte solución.
                    </p>
                    <p className="border border-cyan-600 text-cyan-600 mb-40 py-5 px-3 w-60">Tu Problema es mi pasion ...!</p>
                </div>
            </section>
    );
}
export default SeccionI;