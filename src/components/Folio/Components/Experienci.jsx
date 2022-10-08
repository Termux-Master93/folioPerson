import React from "react";
import { faFolder, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BsGithub } from "react-icons/bs";

const Experienci = () => {
    const folios = [
        {
            id: 1,
            title: "Punto de Venta para Ferretería",
            parrafo: "Creación de Solución para Ventas y Compras de productos y control de almacén",
            tecnology: ["Boostrap", " , ", " HTML 5", " , ", "PHP", "  ", "Jquery", " , ", "Css 3", " , ", "Myslq"],
            iconGit: <BsGithub />,
            link: "https://github.com/Termux-Master93/proyecto"
        },
        {
            id: 2,
            title: "Punto de Venta para Farmacia",
            parrafo: "Solución para Ventas y Compras de medicamentos, control de almacén, apertura de caja, etc.",
            tecnology: ["Boostrap", " , ", " HTML 5", " , ", "PHP", "  ", "Jquery", " , ", "Css 3", " , ", "Myslq"],
            iconGit: <BsGithub />,
            link: "https://github.com/Termux-Master93/sistemaFarmacia"
        },
        {
            id: 3,
            title: "Este Proyecto",
            parrafo: "Folio Personal, con diseño minimalista, floatingInputs y targetas dinamicas.",
            tecnology: ["React Js", " , ", "Talwind Css", " , ", "Javascript", " , ", " HTML 5", " , ", "Css 3", " , ", "Firebase"],
            iconGit: <BsGithub />,
            iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
            linkCode: "https://github.com/Termux-Master93/folioPerson",
            link: ""
        },
        {
            id: 4,
            title: "Diseño de Sección Nosotros para Empresa Jurídica",
            parrafo: "Sección amigable con tarjetas y diseño paralax",
            tecnology: ["Boostrap", " , ", " HTML 5", " , ", "Css 3",],
            iconGit: <BsGithub />,
            iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
            linkCode: "https://github.com/Termux-Master93/nosotros",
            link: "https://webcacecob.netlify.app/nosotros"
        },
        {
            id: 5,
            title: "GDLWEBCAN V1",
            parrafo: "pagina desarrarrolada por fines academicos, se hace uso de librerias jquery",
            tecnology: [" HTML 5", " , ", "Css 3", " , ", "Jquery", " , ", "JavaScript"],
            iconGit: <BsGithub />,
            iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
            linkCode: "",
            link: "https://peaceful-brigadeiros-c7d9f7.netlify.app/"
        },
        {
            id: 5,
            title: "GDLWEBCAN V2",
            parrafo: "pagina desarrarrolada por fines academicos, 100% rasponsive y carrucel automatico y infinito",
            tecnology: [" HTML 5", " , ", "Css 3", ",", "Boostrap"],
            iconGit: <BsGithub />,
            iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
            linkCode: "https://github.com/Termux-Master93/git_GDLWEBCAP_BOOSTRAP",
            link: "https://termux-master93.github.io/git_GDLWEBCAP_BOOSTRAP/site"
        },

    ]

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