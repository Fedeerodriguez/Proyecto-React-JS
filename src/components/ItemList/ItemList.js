import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
    return(
        <div className="grid justify-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mr-8 mt-36 ml-8 "> 
            {productos.map(prod => <Item key={prod.id} {...prod} className="flex justify-center"/>)}

        </div>
    )
}


export default ItemList