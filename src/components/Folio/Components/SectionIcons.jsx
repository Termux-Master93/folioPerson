import React from 'react';
import { icons } from './constant/constant';
const SectionIcons = () => {
    return (
        <>
            <blockquote className="hidden lg:block  container m-auto  w-full">
                <div className=" grid grid-cols-2">
                    <div className="grid sm:grid-cols-1 justify-self-start fixed top-[24rem] xl:ml-8">
                        <ul className='pb-2 block'>
                            {icons.map((icono, index) => (
                                <li
                                    key={index}
                                    className='text-cyan-600 text-3xl mb-3'>
                                  
                                    <a
                                        target="_BLANk"
                                        className='hover:tooltip hover:tooltip-open hover:tooltip-right'
                                        data-tip={icono.toltip}
                                        href={icono.url}
                                        rel="noreferrer"
                                    >{icono.icon}</a>
                                </li>

                            ))
                            }
                            <li className='ml-4'><div className="h-[10rem] border w-0 border-x-white"></div></li>
                        </ul>

                    </div>
                    <div className="grid sm:grid-cols-1 justify-self-end fixed top-[20rem] xl:mr-8">
                        <ul className="pb-2">
                            <li><p className='text-cyan-600 text-medium rotate-90 w-1 mb-[11rem]'>elvisaguile2@gmail.com</p></li>
                            <li><div className="h-[10rem] border w-0  border-x-white"></div></li>
                        </ul>
                    </div>
                </div>


            </blockquote>

            <div className="w-3/5 container mx-auto mt-[8rem] text-center">
            <div className='lg:hidden pb-2 flex justify-center'>
                            {icons.map((icono, index) => (
                                <p
                                    key={index}
                                    className='text-cyan-600 text-3xl text-center mr-3'>
                                    <a
                                        target="_BLANk"
                                        className='hover:tooltip hover:tooltip-open hover:tooltip-accent'
                                        data-tip={icono.toltip}
                                        href={icono.url}
                                        rel="noreferrer"
                                    >{icono.icon}</a>
                                </p>

                            ))
                            }
                        </div>
                <p className="text-slate-300 block text-medium pb-4">Diseñado y Construido por <span className="text-cyan-600">@Elvis Aguilera Santur</span></p>
            </div>
        </>

    );
}
export default SectionIcons;