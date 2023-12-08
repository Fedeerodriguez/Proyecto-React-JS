import { useEffect , useState } from "react"
import { getProductos, getProductosByCategoria } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([])

    const {categoriaId}= useParams()

    useEffect(() =>{
        const asyncFunc = categoriaId ? getProductosByCategoria : getProductos
        asyncFunc(categoriaId)
            .then(Response =>{
                setProductos(Response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [categoriaId])


    return(
       <div>
        <h2>{mensaje}</h2>
        <ItemList productos={productos}/>
       </div> 
       
       
    )
    
}


export default ItemListContainer