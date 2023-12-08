import { Link, NavLink } from "react-router-dom"
import CartWiget from "../CartWidget/CartWidget"

function NavBar(props) {
    const {img} = props
    return(
        <nav className="hero is-info ">
            <div className="columns ">
                <div className="column is-4"> 
                    <figure>
                        <Link to="/">
                            <img className="image is-128x128 ml-4" src={img} alt="Logo"/>  
                        </Link>
                    
                    </figure>
               </div>
               <div className="column is-flex is-align-items-center">
                <NavLink to={`/categoria/plantas`} className="button is-danger  is-rounded mr-6">Plantas</NavLink>
                <NavLink to={`/categoria/centro de mesas`} className="button is-danger  is-rounded mr-6">Centros de mesas</NavLink>
                <NavLink to={`/categoria/contacto`} className="button is-danger  is-rounded mr-6">Contacto</NavLink>
                </div>
                <div className="column is-flex is-align-items-center ml-4">
                    <CartWiget/>
                </div>

            </div>
            
             
            
        </nav>

    )
}

export default NavBar