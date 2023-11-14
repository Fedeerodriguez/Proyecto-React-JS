import CartWiget from "../CartWidget/CartWidget"

function NavBar(props) {
    const {img} = props
    return(
        <nav className="hero is-info ">
            <div className="columns ">
                <div className="column is-4"> 
                    <figure>
                    <img src={img} alt="Logo"/>
                    </figure>
                    <h2>Las sucus de sil</h2>
               </div>
               <div className="column is-flex is-align-items-center">
                <button className="button is-danger  is-rounded mr-2">Plantas</button>
                <button className="button is-danger  is-rounded mr-2">Macetas</button>
                <button className="button is-danger  is-rounded mr-2">Contacto</button>
                </div>
                <div className="column is-flex is-align-items-center">
                    <CartWiget/>
                </div>

            </div>
            
             
            
        </nav>

    )
}

export default NavBar