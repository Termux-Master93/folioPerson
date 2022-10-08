import React from "react";
import styles from './style/index.module.css';

export const LazySpinner = () => {
    return (
        <div className="flex justify-center justify-items-center mt-[20%]">
            <div className="flex mr-5">
                <h4 className="text-black flex text-medium text-xl font-bold">Cargando ...</h4>
            </div>

            <div className={` flex ${styles.spinner}`}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
            </div>
        </div>
    )
}
