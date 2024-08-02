import { useState } from "react"
import ContactoForm from "../ContactoForm/ContactoForm"
import { db } from "../config/firebaseConfig"
import { collection, addDoc, Timestamp } from "firebase/firestore"


const Contacto = ()=>{
    const [ cargando, setCargando ]= useState(false)
    const [ enviar, setEnviar ] = useState("")

    const CrearContacto = async ({nombre,apellido,email})=>{
        setCargando(true)
        try {
            const objEnviar = {
                buyer: {
                    nombre,apellido,email
                },
                data: Timestamp.fromDate(new Date())
            }
            const envioRef = collection(db,"Contacto")
            const envioAdded = await addDoc(envioRef,objEnviar)

            setEnviar(envioAdded.id)
        }catch(error){
            console.log(error)
        }finally{
            setCargando(false)
        }
    }

    if(cargando){
        return <h1>Se esta enviando su informacion</h1>
    }

    if(enviar){
        return <h1>Se ha enviado correctamente tu contacto</h1>
       
        
        
    }

    return(
        <div>
            <h1>Contacto</h1>
            <ContactoForm confirmado={CrearContacto}/>
        </div>
    )
}

export default Contacto