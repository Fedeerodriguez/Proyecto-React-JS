import CartWiget from "../CartWidget/CartWidget"

function NavBar(props) {
    const {img} = props
    return(
        <nav>
            <div> 
                <figure>
                    <img src={img} alt="Logo"/>
                </figure>
               <h2>Las sucus de sil</h2>
            </div>
            <div>
                <button>Plantas</button>
                <button>Macetas</button>
                <button>Contacto</button>
            </div>
            <CartWiget/>
        </nav>

    )
}

export default NavBar