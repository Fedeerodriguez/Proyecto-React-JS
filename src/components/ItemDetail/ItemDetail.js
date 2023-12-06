import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,nombre,img, categoria,descripcion,precio,stock}) =>{
    
    
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
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log("Cantidad agregada",cantidad)}/>
            </footer>
        </article>
    )
}

export default ItemDetail