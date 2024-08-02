import { GrCart } from "react-icons/gr"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"


const CartWiget =() => {
    const { totalCantidad }= useContext(CartContext)
    return (
        <div>
            <Link to="/cart" className="flex items-center w-16" >
                 <GrCart/>
                 { totalCantidad() }
            </Link>
        </div>
    )
    
}

export default CartWiget