import React from "react";
import Auth from './Auth.jsx';
import {Link} from  'react-router-dom';

 const Ingresar=()=>{
    //funcion arroy ojo de este modo enviaremos parametros
    const Login=()=>{
        return (
           <Auth/> 
        );
        
    }
    //#0a192f color
    return (
        <div className='mt-5'> 
            <Link to={'/Auth'}>
                    <button 
                        className="btn btn-warning"
                        onClick={()=>{Login()}}
                    >
                        Ingresar
                    </button>
            </Link>  
        </div>
    );
}
export default Ingresar;