import React from "react";

import { SiJquery, SiMicrosoftsqlserver, SiTailwindcss } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { FaReact, FaCheck } from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
import  {SiFirebase,SiPhp} from 'react-icons/si';
const SpinnerTecnology = () => {
    const listTecnology = [
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
    return (

        <div className="flex justify-start ml-[23%] sm:ml-[12rem] md:ml-[15rem] mt-[-2.5rem]">
            <div className="grid grid-cols-3 sm:grid-cols-4  gap-x-10 sm:gap-x-16">
                {
                    listTecnology.map((tec, index) => (
                        <div key={index} className="grid grid-cols-1 mb-[3rem]">
                            <div className="flex">
                                <h2 className="text-cyan-600 mr-3 flex"><FaCheck /></h2>
                                <p
                                    className={`${tec.color} text-2xl mt-[-0.4rem] flex hover:tooltip hover:tooltip-open hover:tooltip-bottom xl:hover:tooltip-right`}
                                    data-tip={tec.datTitle}
                                >
                                    {tec.icon}
                                </p>
                            </div>
                        </div>
                    ))

                }


            </div>

        </div>
    );
}
export default SpinnerTecnology;