import { CartContext } from "../Context/CartContext";
import React from "react";
import { useContext } from "react";


const CartItem = ({ item }) =>{
    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <div>
                <h2>
                    {item.nombre}
                </h2>
                <picture>
                <img src={item.img} alt={item.nombre} />
                </picture>  
                <p>
                    Cantidad: {item.cantidad}
                </p>
                <p>
                    Subtotal: {item.cantidad * item.precio}
                </p>
                <button onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem