import React from "react";
import {FaCheck } from 'react-icons/fa';
import { listTecnology } from "./constant/constant";
const SpinnerTecnology = () => {

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