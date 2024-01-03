import { useState } from "react";



const CheckoutForm = ({ onConfirmado }) =>{
    const [ nombre , setNombre ] = useState('')
    const [ telefono , setTelefono ] = useState('')
    const [ email , setEmail ] = useState('')

    const handleConfirmado = (Event) =>{
        Event.preventDefault()

        const userData = {
            nombre, telefono , email
        }

        onConfirmado(userData)
    }

    return(
        <div>
            <form onSubmit={handleConfirmado}>
                <label>
                    Nombre
                    <input type="text" value={nombre} onChange={({target}) => setNombre(target.value)}/>
                </label>
                <label>
                    Telefono
                    <input type="text" value={telefono} onChange={({target}) => setTelefono(target.value)}/>
                </label>
                <label>
                    Email
                    <input type="email" value={email} onChange={({target}) => setEmail(target.value)}/>
                </label>
                <div>
                    <button type="submit" className="button" >Crear Orden </button>
                </div>
            </form>
        </div>
    )
}


 export default CheckoutForm