import { CartContext } from "../Context/CartContext";
import React from "react";
import { useContext } from "react";
import "./CartItem.css"


const CartItem = ({ item }) =>{
    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <div className="grid grid-cols-4 gap-3 mt-4">
                <h2>
                    {item.nombre}
                </h2>  
                <p>
                    Cantidad: {item.cantidad}
                </p>
                <p>
                    Subtotal: {item.cantidad * item.precio}
                </p>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm" onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem