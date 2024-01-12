import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Timestamp, collection, addDoc,  } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./checkout.css"



const Checkout = () =>{
    const [ cargando , setCargando ] = useState(false)
    const [ ordenId , setOrdenId ] = useState("")

    const { cart , totalPrecio , clearCart } = useContext(CartContext)

    const crearOrden = async ({nombre, telefono, email})=>{
        setCargando(true)

        try {
            const objOrden = {
                buyer: {
                    nombre,telefono,email
                },
                Items : cart,
                total : totalPrecio(),
                date : Timestamp.fromDate(new Date())
            }
            const ordenRef = collection(db, "orden")
            const orderAdded = await addDoc(ordenRef, objOrden)

            setOrdenId(orderAdded.id)
            clearCart()
           
        } catch (error) {
            console.log(error)
        } finally{
            setCargando(false)
        }
            
        
    }
 

    if(cargando){
        return <h1>Se esta generando su orden...</h1>
    }

    if(ordenId){
        return <h1>El id de su orden es: {ordenId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirmado={crearOrden}/>
        </div>
    )


}

export default Checkout