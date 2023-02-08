import React from "react";

const WhoIam=()=>{
    return(
        <div className="container m-auto w-full sm:w-9/12  z-0">
            <a name={2} href="/#" rel="noreferrer" > </a>
            <section className="container p-20">
               
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                    <div className="text-left mb-5">
                        <h2 className="text-zinc-300 w-full text-4xl font-bold mb-6">Quien es este tipo?</h2>
                        <p className="text-zinc-300 w-full">
                           <span className="text-cyan-600">Como estas...!</span>, mi pasión
                            por desarrollar comenzó cuando decidí instalar en mi dispositivo móvil Termux APK, el
                            ejecutar un script me llevo a la investigación y desde ese entonces empece a aprender
                            <span className="text-cyan-600"> HTML y CSS..</span> </p><br/>
                        <p className="text-zinc-300 w-full">
                            El siguiente paso fue matricularme en él<span className="text-cyan-600"> (Instituto tecnológico privado "ISA SANTA ÁNGELA" PIURA-PERU) </span>
                            y empezar a aprender de manera autodidacta, en este trascurso tuve la oportunidad de integrarme con
                            amigos y desarrollar conjuntamente un par de sistemas de escritorio para negocios reales, luego 
                            continúe con pequeños trabajos web.
                        </p><br/>
                        <p className="text-zinc-300 w-full">
                             También recientemente, <span className="text-cyan-600">estoy colaborando en el desarrollo de una aplicación de delivery a nivel 
                             nacional donde he aprendido y sigo aprendiendo cosas nuevas de React JS y Next js .</span>
                        </p>
                        <h3 className="text-zinc-300">Aqui unas tecnologias que manejo actualmente.</h3>
                    </div>
                    <div className="flex w-full content-center ml-[0rem] sm:ml-[3rem]">
                        <picture className="text-center relative  my-auto">
                             <img src="assets/elvis.png" alt="imagen elvis" className="md:max-w-xs md:hover:scale-110 md:transition md:duration-300 md:ease-in-out"></img>
                        </picture>
     
                    </div>
                </div>

            </section>
        </div>
    );
}
export default WhoIam;