import { useState } from "react"
import { IoMdContact } from "react-icons/io";


const ContactoForm = ({confirmado})=>{
    const [ nombre, setNombre ]= useState("")
    const [ apellido, setApellido ]= useState("")
    const [ email, setEmail ]= useState("")
    const [mensaje,setMensaje]= useState("")

    const handleEnviar = (e)=>{
        e.preventDeFault()
        
        const dataUsada ={
            nombre,apellido,email,mensaje
        
        }

        confirmado(dataUsada)
    }


    return(
        <div className="flex justify-center items-center h-[600px]">
            <form onSubmit={handleEnviar} className="w-96 p-6 mt-5 bg-cyan-600 rounded-md">
                <h1 className="text-3xl  text-center font-semibold flex items-center justify-center"><IoMdContact className="mr-1"/>Contacto</h1>
                <hr className="mt-3"/>

                    <div className="mt-3">
                        <label className="block text-base mb-2">
                              Nombre
                        </label>
                        <input 
                        type="text" 
                        placeholder="Nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"/>
                    </div>
                   
                    <div className="mt-3">
                        <label className="block text-base mb-2">
                            Apellido
                        </label>
                        <input 
                            type="text" 
                            placeholder="Apellido" 
                            value={apellido} 
                            onChange={(e)=> setApellido(e.target.value)}
                            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"/>
                    </div>
                    <div className="mt-3">
                        <label className="block text-base mb-2">
                            Email
                        </label>
                        <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"/>   
                    </div>
                    <div className="mt-3">
                        <label className="block text-base mb-2">
                            Mensaje
                        </label>
                        <textarea name="Mensaje"
                        value={mensaje}
                        onChange={(e)=> setMensaje(e.target.value)}
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"/>
                    </div>
                <div className="mt-5">
                    <button type="submit" className="border-2 border-green-500 bg-green-500 text-white w-full py-1 rounded-md font-semibold">Enviar</button>
                </div>
            </form>
        </div>
    )

}

export default ContactoForm