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
        <article className="bg-lime-100 w-72 rounded-sm mt-32">
                <img  src={img} alt={nombre} className="size-64 rounded-lg w-full"/>
            <section className="my-2">
                <h2 className="font-semibold ml-2">{nombre}</h2>
                <p className="mt-4 ml-2">
                    Categoria: {categoria}
                </p>
                <p className="mt-4 ml-2">
                   descripcion: {descripcion}
                </p>
                <p className="mt-4 ml-2 text">
                    precio: ${precio}
                </p>
            </section>
            <footer className="flex justify-center mt-4 mb-5">
                {
                    contadorAgregado > 0 ? (
                        <Link to="/cart" className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>  
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail