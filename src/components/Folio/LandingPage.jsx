import React from "react";
import styles from './styles/index.module.css';

import LangingHeader from './Components/LandingHeader';
import SeccionI from "./Components/SeccionI";
import WhoIam from "./Components/WhoIam";
import SectionIcons from "./Components/SectionIcons";
import Experienci from "./Components/Experienci";
import SpinnerTecnology from "./Components/SpinnerTecnology";
import PersonFomrs from "./Components/Form/PersonForm";

const LandingPage=()=>{
    return(
        <main className={`${styles.background}`}>
          {/**
           * https://termux-master93.github.io/GIMTH-PAGINA-PARA-GIM/index.html 
           * */}
            <LangingHeader/>
            <SeccionI/>
            <SectionIcons/>
            <WhoIam/>
            <SpinnerTecnology/>
            <Experienci/>
            <PersonFomrs/>
        </main>
    );
}
export default LandingPage;