import React,{useState} from "react";
import db from '../../Config/Firebase';
import { Link } from "react-router-dom";
//importamos Material Auth
import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signInWithRedirect, //ir al apartado de gogle
     GoogleAuthProvider //identificar el usuario que queremos
    } from "firebase/auth";

const auth=getAuth(db); 
const googleProvider=new GoogleAuthProvider();
const Auth=()=>{
    const [isregister,setisRegister]=useState(false);
    async function handleForm(e){
        e.preventDefault();
       const correo=e.target.email.value;
       const contra=e.target.password.value;

       if(isregister){
        const usuario=await createUserWithEmailAndPassword(auth,correo,contra);

        console.log(usuario);
        }else{
            signInWithEmailAndPassword(auth,correo,contra);
            setisRegister(null);
        }
    }
    return(
        <>
        <div class="card lg:card-side bg-base-100 shadow-xl mt-5 container mx-auto ">
            <div>
             <img src="https://placeimg.com/400/400/arch" alt="Album" />
            </div>
            <div class="card-body w-full ">
                <form onSubmit={handleForm}>
                    <div className="form-control ">
                        <label className="label" htmlFor="email">
                             <span className="label-text">Tu correo..?</span>
                        </label>
                        <input type="email" placeholder="Tu Email..!" id="email" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor="pass">
                             <span className="label-text">Tu Contraseña.?</span>
                        </label>
                        <input type="password" placeholder="Tu Password..!" id="pass" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control mt-4">
                        <Link to={'/HomeUser'}>
                            <button className="btn btn-block btn-primary" type="submit">{isregister ? "Registrate" : "Inicia Seccion" }</button>
                        </Link>
                    </div>
                    <button type="submit" onClick={()=>signInWithRedirect(auth,googleProvider)}>Accede a Google</button>
                </form>
                <button onClick={()=>setisRegister(!isregister)}>
                    {isregister ? "Ya tienes cuenta? inicia seccion" : "¿no tienes Cuenta? Registrate" }
                </button>
            </div>
        </div>

        
        </>
    );
}

export default Auth;