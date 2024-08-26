import { Link } from "react-router-dom"


const Item = ({id,nombre,img,precio,stock}) =>{
    
    
    return(
        <article className="bg-lime-100 w-72 rounded-sm">
                <img src={img} alt={nombre} className="size-64 rounded-lg w-full" />
            <section className="my-2">
                <h2 className="font-semibold ml-2">{nombre}</h2>
                <p className="mt-4 ml-2">
                   precio: ${precio}
                </p>
                <p className="mt-5 mb-3 ml-2">
                    stock disponible: {stock}
                </p>
                <Link to={`/item/${id}`} className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-full text-sm">Ver detalle</Link>
            </section>
            

        </article>
    )
}

export default Item