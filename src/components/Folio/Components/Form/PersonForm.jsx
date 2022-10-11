import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { collection, doc,setDoc } from "firebase/firestore/lite";
import { db } from "../../../../config/Firebase";


const PersonForm = () => {
    const [loading,setloading]=useState(false)
    let styleToast= {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    }
    
    const {handleSubmit,reset,register}=useForm();
    const onSubmit=async()=>{
        let correo=document.getElementById('email').value;
        let mensaje=document.getElementById('message').value;
       
        const docRef=doc(collection(db,'new_message'))
        setloading(true)
        const upload={
            id: docRef.id,
            correo: correo,
            mensaje: mensaje,
        }
        if(!correo){
            toast.error("agrege Correo",styleToast);
            document.getElementById('email').focus();
            setloading(false)
            return;
        }
        if(!mensaje){
            toast.error("agrege Mensaje",styleToast);
            document.getElementById('message').focus();
            setloading(false)
            return;
        }
        await setDoc(docRef,upload);
        toast.success("Mensaje Enviado",styleToast)
        setloading(false)
        reset()
        document.getElementById('email').focus();


        
    }
    return (
        <>
            
            <form 
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
                netlify
                data-netlify="true"
                name="contact"
                >
                <a name={4} href="/#" rel="noreferrer"> </a>
                <div className="w-3/5  container mx-auto mt-[12rem]">
                    <h4 className="text-slate-300 font-bold text-[2rem] text-center mb-3">Degame tu inquietud o saludame..!</h4>
                    <p className="text-medium text-cyan-600 mb-8">Actualmente estoy buscando trabajar contigo, mi bandeja siempre esta abierta.</p>
                   
                    <div className='relative w-full flex justify-center'>
                        <input
                            id="email"
                            type={"email"}
                            {...register("email")}
                            className='input text-white input-md w-full mb-4 block px-2.8 pb-2.5 pt-4 text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        />
                        <label
                            htmlFor={"email"}
                            className='absolute text-md text-gray-100 duration-300 transform-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0a192f] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none '
                        >
                            Tu E-mail
                        </label>
                    </div>
                    <div className='relative w-full flex justify-center mb-4'>
                        <textarea
                            id="message"
                            {...register("message")}
                            className='input input-md w-full mb-4 block px-2.8 pb-2.5 pt-4 text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        />
                        <label
                            htmlFor={"message"}
                            className='absolute text-md text-gray-100 duration-300 transform-translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0a192f] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 pointer-events-none '
                        >
                            Tu Mensage
                        </label>
                    </div>

                    <button 
                        className="btn w-full bg-[#0a192f] border-cyan-600 hover:bg-[#0a192f]  text-cyan-600 mb-[5rem]"
                        type="submit"
                    >
                       {loading ? 'Cargando...' : 'Enviar'} 
                    </button>
                </div>
            </form>
            
        </>
    );
}
export default PersonForm;