import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const LandingHeader = () => {
    const barNav = [
        {
            id: 1,
            link: "Acerca de"
        },
        {
            id: 2,
            link: "Experiencia"
        },
        {
            id: 3,
            link: "Portafolios"
        },
        {
            id: 4,
            link: "Contacto"
        },


    ]


    return (
        <nav className={`container mx-auto w-10/12 sm:w-full bg-slate-900 opacity-100 drop-shadow-xl  sticky top-0 z-50`}>
            
            <header className="container w-full m-auto ">
                <div className="navbar">
                    <div 
                        className="flex-1  lg:flex-none hover:tooltip hover:tooltip-open hover:tooltip-bottom xl:hover:tooltip-right"
                        data-tip={'Elvis Aguilera Santur '}
                        >
                        <img 
                            className="h-[4rem] cursor-pointer"
                            src="assets/elvis.png" 
                             alt="imagen logo" 
                        />
                    </div>
                    <div className="flex justify-end flex-1 px-2">
                        <div className="flex items-stretch">
                            <ul className="hidden  mt-2 md:hidden lg:grid lg:grid-cols-5">
                                { barNav.map((el,index) => (
                                        <a key={index} href={`#${el.id}`} rel="noreferrer"><li className="border border-cyan-600 mr-2 py-1 text-gray-400 cursor-pointer"> {el.link}</li></a>

                                ))}
                                <a 
                                    target="_BLANK"
                                    href="https://drive.google.com/file/d/1s0l99QujKz0cNe9K3BmE66kL3CzNA5_d/view?usp=sharing"
                                    rel="noreferrer"
                                        >
                                    <li className="border border-cyan-600 px-1 py-1 text-gray-400 cursor-pointer"> Curricun Vitae</li>
                                </a>
                            </ul>
                            <div className="dropdown dropdown-end lg:hidden">
                                <label tabIndex={0} className="btn btn-ghost rounded-btn flex-none text-cyan-600">
                                    <FontAwesomeIcon className="h-[1.5rem]" icon={faBars} />
                                </label>
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-slate-900 rounded-box w-52 mt-4 opacity-10">
                                    {barNav.map((el,index) => (
                                            <a key={index} href={`#${el.id}`}><li className="border border-cyan-600 lg:mr-2 py-1 text-gray-400">{el.link}</li></a>

                                    ))}
                                    <a 
                                        target="_BLANK"
                                        href="https://drive.google.com/file/d/1tKc5Fg5JKZkjp_324GX47BEfyEVYHMmm/view?usp=sharing"
                                        rel="noreferrer"
                                        >
                                       
                                    <li className="border border-cyan-600 py-1 text-cyan-600 ">Curriculum Vitae</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    );
}
export default LandingHeader;