import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Timestamp, writeBatch , collection, getDocs, query, documentId, addDoc, where } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"




const Checkout = () =>{
    const [ cargando , setCargando ] = useState(false)
    const [ ordenId , setOrdenId ] = useState('')

    const { cart , totalPrecio , clearCart } = useContext(CartContext)

    const crearOrden = async ({nombre, telefono, email})=>{
        setCargando(true)

        try {
            const objOrden = {
                buyer: {
                    nombre,telefono,email
                },
                Items : cart,
                total : totalPrecio,
                date : Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod=> prod.id)

            const productosRef = collection(db, "Items")

            const ProductosAgregadosDeFirestore = await getDocs(query(productosRef, where(documentId(), "in", ids )))

            const { docs } = ProductosAgregadosDeFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoAgregadoAlCarrito = cart.find(prod=>prod.id === doc.id)
                const prodCantidad = productoAgregadoAlCarrito?.prodCantidad
                if(stockDb >= prodCantidad ){
                    batch.update(doc.ref,{stock : stockDb - prodCantidad })
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0 ){
                await batch.commit()

                const ordenRef = collection(db,"orden")
                const orderAdded = await addDoc(ordenRef, objOrden)

                setOrdenId(orderAdded.id)
                clearCart()
            }else{
                console.error("hay productos fuera de stock")
            }

        } 
        catch (error) {
            console.log(error)
        } 
        finally{
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