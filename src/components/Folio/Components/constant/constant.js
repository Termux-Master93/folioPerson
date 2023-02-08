import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

import { BsGithub,BsBootstrapFill } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiJquery, SiMicrosoftsqlserver, SiTailwindcss,SiFirebase,SiPhp } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { FaReact} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';

export const folios = [
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
        link: "https://daywebsite.netlify.app/"
    },
    {
        id: 4,
        title: "Guego 4 en Raya",
        parrafo: "Guego con buenas practicas, octimizacion y uso de localstore para guardar partidas",
        tecnology: [" HTML 5", " , ", "Css 3", ", ", "React + Vite"],
        iconGit: <BsGithub />,
        iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
        linkCode: "https://github.com/Termux-Master93/TIC-TAC-TOE-4",
        link: "https://cuatro-en-raya.netlify.app/"
    },
    {
        id: 5,
        title: "Diseño de Sección Nosotros para Empresa Jurídica",
        parrafo: "Sección amigable con tarjetas y diseño paralax",
        tecnology: ["Boostrap", " , ", " HTML 5", " , ", "Css 3",],
        iconGit: <BsGithub />,
        iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
        linkCode: "https://github.com/Termux-Master93/nosotros",
        link: "https://webcacecob.netlify.app/nosotros"
    },
    {
        id: 6,
        title: "GDLWEBCAN V1",
        parrafo: "pagina desarrarrolada por fines academicos, se hace uso de librerias jquery",
        tecnology: [" HTML 5", " , ", "Css 3", " , ", "Jquery", " , ", "JavaScript"],
        iconGit: <BsGithub />,
        iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
        linkCode: "",
        link: "https://peaceful-brigadeiros-c7d9f7.netlify.app/"
    },
    {
        id: 7,
        title: "GDLWEBCAN V2",
        parrafo: "pagina desarrarrolada por fines academicos, 100% rasponsive y carrucel automatico y infinito",
        tecnology: [" HTML 5", " , ", "Css 3", ",", "Boostrap"],
        iconGit: <BsGithub />,
        iconView: <FontAwesomeIcon icon={faShareFromSquare} />,
        linkCode: "https://github.com/Termux-Master93/git_GDLWEBCAP_BOOSTRAP",
        link: "https://termux-master93.github.io/git_GDLWEBCAP_BOOSTRAP/site"
    }
]
export const barNav = [
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
export const icons = [
    {
        url: 'https://www.linkedin.com/in/elvis-aguilera-santur-aa58a2230/',
        icon: <AiFillLinkedin />,
        toltip: 'Linkedin'
    },
    {
        url: 'https://github.com/Termux-Master93',
        icon: <AiFillGithub />,
        toltip: 'gitHub'
    },
    {
        url: 'https://www.facebook.com/elvis.aguilera.3705',
        icon: <FiFacebook />,
        toltip: 'Faccebook'
    }

]

export const listTecnology = [
    {
        datTitle: 'React JS',
        icon: <FaReact />,
        color: 'text-cyan-600'
    },
    {
        datTitle: 'JavaScript (EM6 +)',
        icon: <IoLogoJavascript />,
        color: 'text-yellow-400'
    },
    {
        datTitle: 'HTML 5',
        icon: <ImHtmlFive />,
        color: 'text-orange-400'
    },
    {
        datTitle: 'CSS 3',
        icon: <IoLogoCss3 />,
        color: 'text-blue-500'
    },
    {
        datTitle: 'Bootstrap 5',
        icon: <BsBootstrapFill />,
        color: 'text-violet-600'
    },
    {
        datTitle: 'TalwindCss',
        icon: <SiTailwindcss />,
        color: 'text-blue-700'
    },
    {
        datTitle: 'Jquery',
        icon: <SiJquery />,
        color: 'text-white'
    },
    {
        datTitle: 'Mysql',
        icon: <GrMysql />,
        color: 'text-blue-600'
    },
    {
        datTitle: 'SQLServer',
        icon: <SiMicrosoftsqlserver />,
        color: 'text-red-500'
    },
    {
        datTitle: 'FireBase',
        icon: <SiFirebase />,
        color: 'text-yellow-400'
    },
    {
        datTitle: 'PHP',
        icon: <SiPhp />,
        color: 'text-blue-400'
    },
    {
        datTitle: 'Git',
        icon: <BiGitBranch />,
        color: 'text-orange-400'
    }
]