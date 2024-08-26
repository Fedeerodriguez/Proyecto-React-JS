import { useEffect , useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db} from "../config/firebaseConfig"


const ItemListContainer = ({mensaje}) => {

    const [productos, setProductos] = useState([])

    const {categoriaId}= useParams()

    useEffect(() =>{
       

        const collectionRef = categoriaId
            ? query(collection(db, "Items"),where("categoria", "==",categoriaId ))
            : collection(db, "Items")

        getDocs(collectionRef)
            .then((response)=>{

                const productosAdaptados = response.docs.map((doc)=>{

                    const data = doc.data()

                    return { id: doc.id , ...data }

                })
                
                setProductos(productosAdaptados)
            })
            .catch(error=>{
                console.log(error)
            })
            
    }, [categoriaId])


    return(
       <main className="min-h-screen">
        <h2 className="mt-36 flex justify-center font-bold text-4xl">{mensaje}</h2>
        <ItemList  productos={productos} />
       </main>
       
       
    )
    
}


export default ItemListContainer