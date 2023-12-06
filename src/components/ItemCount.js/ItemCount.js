import { useState } from "react"



function ItemCount({stock, initial, onAdd}) {
    const  [cantidad, setCantidad] = useState(initial)

    function incremento(){
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
        
    }

    function decremento(){
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
        
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decremento}>-</button>
                <h3 className="number">{cantidad}</h3>
                <button className="button" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="button" onClick={()=> onAdd(cantidad)} disabled = {!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
    

}

export default ItemCount