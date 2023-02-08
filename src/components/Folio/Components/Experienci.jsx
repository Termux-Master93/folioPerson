import React from "react";
import { faFolder, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { folios } from "./constant/constant";

const Experienci = () => {

    return (
        <div className="container mx-auto w-3/5 mt-[10rem]">
            <a name={3} href="/#" rel="noreferrer"> </a>
            <header className="mb-4">
                <h4 className="text-medium text-white mb-4 text-[2rem] font-bold">Pequeñas Cosas que he Construido</h4>
                <h6 className="text-cyan-600 text-medium">Cheka el archivo</h6>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 ">
                {
                    folios.map((x, index) => (
                        <div  key={index} className=" grid grid-cols-1  rounded-md border border-slate-700 shadow-md mb-4 bg-slate-800">
                            <a href={x.link} target="_BLANK" rel="noreferrer">
                                <div className="rounded p-4 cursor-pointer">
                                    <div className="flex justify-between cursor-pointer">
                                        <div>
                                            <FontAwesomeIcon icon={faFolder} className="boder text-[3rem] text-slate-300 border-slate-100" />
                                        </div>
                                        <div className="mt-[1.5rem] flex">
                                            <a href={x.linkCode} target="_BLANK" rel="noreferrer"><span className=" flex mr-2 text-slate-300">{x.iconGit}</span> </a>
                                        </div>
                                    </div>
                                    <div className="min-h-[4rem]">
                                        <h5 className="font-bold text-left text-slate-300 hover:text-cyan-600 flex text-xl justify-start cursor-pointer mb-2">{x.title}</h5>
                                    </div>
                                    <p className="justify-start text-left text-slate-100 text-medium min-h-[7rem] cursor-pointer">{x.parrafo}</p>
                                    <div className="flex justify-between mt-2">
                                        <p className=" px-1 text-left  text-slate-200 cursor-pointer">{x.tecnology}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Experienci;