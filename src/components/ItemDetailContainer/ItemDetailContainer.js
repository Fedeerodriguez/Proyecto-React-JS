import "./ItemDetailContainer.css"
import { useEffect , useState } from "react"
import { getProductosById } from "../AsyncMock/AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState(null)

    useEffect(() =>{
        getProductosById("10")
            .then(Response =>{
                setProductos(Response)
            })
            .catch(error =>{
                console.error(error)
            })

    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer