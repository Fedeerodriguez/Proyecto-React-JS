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
        <div className="flex items-center flex-col">
            <div className="flex flex-row justify-center mb-2">
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm" onClick={decremento}>-</button>
                <h3 className="m-auto ml-10 mr-10">{cantidad}</h3>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm mt-1" onClick={()=> onAdd(cantidad)} disabled = {!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
    

}

export default ItemCount