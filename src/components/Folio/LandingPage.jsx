import styles from './styles/index.module.css';
import React, { Suspense, lazy } from "react";
import { LazySpinner } from './Components/spinner/LazyLoader';

const LandingHeader=lazy(()=>import('./Components/LandingHeader'))
const SeccionI=lazy(()=>import('./Components/SeccionI'))
const  WhoIam=lazy(()=>import('./Components/WhoIam'))
const SectionIcons=lazy(()=>import('./Components/SectionIcons'))
const Experienci=lazy(()=>import('./Components/Experienci'))
const SpinnerTecnology=lazy(()=>import('./Components/SpinnerTecnology'))
const PersonFomrs=lazy(()=>import('./Components/Form/PersonForm'))
const LandingPage = () => {
  
    return (
        <Suspense fallback={<LazySpinner/>}>
            <main className={`${styles.background}`}>
                <LandingHeader />
                <SeccionI/>
                <WhoIam/>
                <SpinnerTecnology/>
                <Experienci/>
                <PersonFomrs/> 
                <SectionIcons/>
              
            </main>
        </Suspense>
    );
}
export default LandingPage;