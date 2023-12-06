import { useEffect , useState } from "react"
import { getProductos } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        getProductos()
            .then(Response =>{
                setProductos(Response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [])


    return(
       <div>
        <h2>{mensaje}</h2>
        <ItemList productos={productos}/>
       </div> 
       
       
    )
    
}


export default ItemListContainer