import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import "./CheckoutForm.css"




const CheckoutForm = ({ onConfirmado }) =>{
    const [ nombre , setNombre ] = useState('')
    const [ telefono , setTelefono ] = useState('')
    const [ email , setEmail ] = useState('')

    const handleConfirmado = (e) =>{
        e.preventDefault()

        const userData = {
            nombre, telefono , email
        }

        onConfirmado(userData)
    }

    return(
        <div className="flex justify-center items-center h-[600px]">
            <form onSubmit={handleConfirmado} className="w-96 p-6 mt-5 bg-cyan-600 rounded-md">
                <h1 className="text-3xl  text-center font-semibold flex items-center justify-center"><IoPerson className="mr-1" />Checkout</h1>
                <hr className="mt-3"/>
                <div className="mt-3">
                    <label className="block text-base mb-2">
                        Nombre
                    </label>
                    <input  
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        placeholder="Nombre"/>
                </div> 
                <div className="mt-3">  
                    <label className="block text-base mb-2">
                        Telefono
                    </label>
                    <input 
                        type="text" 
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)}
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        placeholder="Telefono"/>
                </div>
                <div className="mt-3">
                    <label className="block text-base mb-2">
                        Email
                    </label>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Email"/> 
                </div>
                    <div className="mt-5">
                        <button  type="submit" className="border-2 border-green-500 bg-green-500 text-white w-full py-1 rounded-md font-semibold" >Crear Orden </button>
                    </div>
                
               
            </form>
        </div>
    )
}


 export default CheckoutForm