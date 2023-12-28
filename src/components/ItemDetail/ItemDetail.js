import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"

const ItemDetail = ({id,nombre,img, categoria,descripcion,precio,stock}) =>{
    const [ contadorAgregado, setContadorAgregado] = useState(0)

    const { addItem }= useContext(CartContext)

    const handleOnAdd = (cantidad)=>{
        setContadorAgregado(cantidad)

         const item = {
            id, nombre, precio
        }

        addItem(item, cantidad)

    }

    
    return(
        <article className="Card">
            <header className="Header">
                <h2 className="infoheader">{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="itemimg"/>
            </picture>
            <section>
                <p className="info">
                    Categoria: {categoria}
                </p>
                <p className="info">
                   descripcion: {descripcion}
                </p>
                <p className="info">
                    precio: ${precio}
                </p>
            </section>
            <footer className="itemFooter">
                {
                    contadorAgregado > 0 ? (
                        <Link to="/cart" className="opcion">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>  
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail