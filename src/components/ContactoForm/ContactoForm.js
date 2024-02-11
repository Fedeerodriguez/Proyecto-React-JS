import { useState } from "react"


const ContactoForm = ({confirmado})=>{
    const [ nombre, setNombre ]= useState("")
    const [ apellido, setApellido ]= useState("")
    const [ email, setEmail ]= useState("")

    const handleEnviar = (e)=>{
        e.preventDeFault()
        
        const dataUsada ={
            nombre,apellido,email
        
        }

        confirmado(dataUsada)
    }


    return(
        <div>
            <form onSubmit={handleEnviar} className="form">
                <div>
                    <label>
                        Nombre
                        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </label> 
                    <label>
                        Apellido
                        <input type="text" placeholder="Apellido" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <button type="button">Enviar</button>
                </div>
            </form>
        </div>
    )

}

export default ContactoForm