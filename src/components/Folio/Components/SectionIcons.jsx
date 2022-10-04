import React from 'react';
import {FiFacebook} from "react-icons/fi"; 
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";           

const SectionIcons=()=>{
    return(
        <blockquote className="container m-auto w-full">
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-1 justify-self-start fixed top-[24rem]">
                    <ul className='pb-2 block'>
                        <li className='text-white text-4xl'> <FiFacebook/></li>
                        <li className='text-white text-4xl my-3'> <AiFillLinkedin /></li>
                        <li className='text-white text-4xl mb-5'><AiFillGithub/></li>
                        <li className='ml-4'><div className="h-[10rem] border w-0 border-x-white"></div></li>
                    </ul>
                    
                </div>
                <div className="grid grid-cols-1 justify-self-end fixed top-[20rem]">
                    <ul className="pb-2">
                        <li><p className='text-white rotate-90 w-1 mb-[11rem]'>elvisaguile2@gmail.com</p></li>
                        <li><div className="h-[10rem] border w-0  border-x-white"></div></li>
                    </ul>
                </div>
            </div>
             
        </blockquote>
       
    );
}
export default SectionIcons;