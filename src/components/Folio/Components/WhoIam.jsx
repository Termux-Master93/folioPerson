import React from "react";

const WhoIam=()=>{
    return(
        <div className="container m-auto w-9/12  z-0">
            <a name={2}/>
            <section className="container p-20">
               
                <div className="grid grid-cols-2">
                    <div className="text-left mb-5">
                        <h2 className="text-zinc-300 w-full text-4xl font-bold mb-6">Quien es este tipo?</h2>
                        <p className="text-zinc-300 w-full">
                        
                            Como estas...! Mi nombre es Elvis me gusta crear sitios de escritorio y webs mi pasión
                            por desarrollar comenzó cuando decidí instalar en mi dispositivo móvil Termux app, el
                            ejecutar un script me llevo a la investigación y desde ese entonces empece a aprender
                             HTML y CSS..</p><br/>
                        <p className="text-zinc-300 w-full">
                            El siguiente paso fue matricularme en él (Instituto tecnológico privado "ISA SANTA ÁNGELA" PIURA-PERU) 
                            y empezar a aprender de manera autodidacta, en este trascurso tuve la oportunidad de integrarme con
                            amigos y desarrollar conjuntamente un par de sistemas de escritorio para negocios reales, luego 
                            continúe con pequeños trabajos web.
                        </p><br/>
                        <p className="text-zinc-300 w-full">
                             También recientemente, estoy colaborando en el desarrollo de una aplicación de delivery a nivel 
                             nacional donde estoy aprendiendo cosas nuevas como React JS y Next.
                        </p>
                        <h3 className="text-zinc-300">Aqui unas tecnologias que manejo actualmente.</h3>
                    </div>
                    <div className="flex w-full content-center ml-[3rem]">
                        <picture className="text-center relative  my-auto">
                             <img className="h-[18rem]" src="assets/elvis.png" alt="imagen elvis"></img>
                        </picture>
                        
                       
                        
                    </div>
                </div>

            </section>
        </div>
    );
}
export default WhoIam;