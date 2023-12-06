import "./Item.css" 

const Item = ({id,nombre,img,precio,stock}) =>{
    
    
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
                   precio: ${precio}
                </p>
                <p className="info">
                    stock disponible: {stock}
                </p>
            </section>
            <footer className="itemFooter">
                <button className="opcion">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item