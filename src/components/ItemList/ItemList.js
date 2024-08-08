import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
    return(
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-36 ml-8 "> 
            {productos.map(prod => <Item key={prod.id} {...prod} />)}

        </div>
    )
}


export default ItemList