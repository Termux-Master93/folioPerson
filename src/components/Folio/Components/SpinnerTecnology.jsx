import { SiJquery,SiMysql,SiMicrosoftsqlserver,SiTailwindcss} from "react-icons/si";
import styled from '../styles/index.module.css';
import React from "react";

import { ImHtmlFive} from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill} from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";  
import { FaReact } from 'react-icons/fa';
const SpinnerTecnology=()=>{
    return(
        <div className={`ml-[25%] sm:ml-[12rem] md:ml-[15rem] ${styled.containerPather}`}>
            <div className={`${styled.containerHijo}`} >
                <div className={`${styled.box}`}><p className='text-white text-4xl xl:mt-[50%]'><SiJquery/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-4xl xl:mt-[50%]'><ImHtmlFive/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-4xl xl:mt-[50%]'><IoLogoCss3/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-4xl mt-[50%]'><BsBootstrapFill/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-5xl xl:ml-[50%]  xl:mt-[50%]'><BiGitBranch/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-5xl'><SiMysql/></p></div>
                <div className={`${styled.box}`}><p className='text-white xl:mt-[88%] text-4xl'><SiMicrosoftsqlserver/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-5xl mt-[50%] xl:ml-[90%]'><SiTailwindcss/></p></div>
                <div className={`${styled.box}`}><p className='text-white text-5xl mt-[50%] xl:ml-[90%]'><FaReact/></p></div>               
            </div>
        </div>
    );
}
export default SpinnerTecnology;