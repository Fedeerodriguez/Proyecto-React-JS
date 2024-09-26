import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";


const Cart = () =>{
    const  { cart, clearCart, totalCantidad, totalPrecio } = useContext(CartContext)

    if(totalCantidad() === 0 ){
        return(
            <div className="mt-28 flex flex-col justify-center items-center h-screen">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="bg-blue-500 text-white px-2 py-1 ml-2 mt-2 rounded-full text-sm">Productos</Link>
            </div>
        )
    }

    return(
        <div className="mt-32 w-[500px] m-auto h-[500px] shadow-lg rounded-md ">
            {cart.map(item => <CartItem key={item.id} item={item}/>)}
            <h3 className="bg-white flex justify-center mb-4">Total: ${totalPrecio()}</h3>
            <div className="flex justify-center mt-2">
                <button onClick={()=> clearCart()} className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm" > Limpiar carrito </button>
                <Link to="/checkout" className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm">checkout</Link>
            </div>
        </div>
    )

}

export default Cart