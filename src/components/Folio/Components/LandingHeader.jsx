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
        <nav className={`container mx-auto bg-slate-900 opacity-100 drop-shadow-xl  sticky top-0 z-50`}>
            
            <header className=" container w-full m-auto ">
                <div className="navbar">
                    <div className="flex-1  lg:flex-none">
                        <img className="h-14" src="logo512.png" alt="imagen logo"></img>
                    </div>
                    <div className="flex justify-end flex-1 px-2">
                        <div className="flex items-stretch">
                            <ul className="hidden  mt-2 md:hidden lg:grid lg:grid-cols-5">
                                { barNav.map((el) => (
                                        <a href={`#${el.id}`}><li className="border border-cyan-600 mr-2 py-1 text-gray-400 cursor-pointer"> {el.link}</li></a>

                                ))}
                                <li className="border border-cyan-600 mr-2 py-1 text-gray-400 cursor-pointer"> Curricun Vitae</li>

                            </ul>
                            <div className="dropdown dropdown-end lg:hidden">
                                <label tabIndex={0} className="btn btn-ghost rounded-btn flex-none text-cyan-600">
                                    <FontAwesomeIcon className="h-[1.5rem]" icon={faBars} />
                                </label>
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-slate-900 rounded-box w-52 mt-4 opacity-10">
                                    {barNav.map((el) => (
                                            <a href={`#${el.id}`}><li className="border border-cyan-600 lg:mr-2 py-1 text-gray-400">{el.link}</li></a>

                                    ))}
                                    <li className="border border-cyan-600 py-1 text-cyan-600 ">Curricun Vitae</li>
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