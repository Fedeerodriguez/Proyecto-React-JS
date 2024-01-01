import "./ItemDetailContainer.css"
import { useEffect , useState } from "react"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"




const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState(null)
    const [ cargando , setCargando ] = useState(true)

    const {itemId} = useParams()

    useEffect(() =>{
        setCargando(true)

        const docRef = doc(db, "Items", itemId)

        getDoc(docRef)
            .then(Response=>{
                const data = Response.data()
                const productosAdaptados = { id:Response.id, ...data }
                setProductos(productosAdaptados)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(()=>{
                setCargando(false)
            })

    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer