import { CartContext } from "../Context/CartContext";
import React from "react";
import { useContext } from "react";
import "./CartItem.css"


const CartItem = ({ item }) =>{
    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <div className="carrito">
                <h2>
                    {item.nombre}
                </h2>  
                <p>
                    Cantidad: {item.cantidad}
                </p>
                <p>
                    Subtotal: {item.cantidad * item.precio}
                </p>
                <button className="button" onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem