import { Link, NavLink } from "react-router-dom"
import CartWiget from "../CartWidget/CartWidget"
import { Menu, X } from "lucide-react"
import { useState } from "react";

function NavBar(props) {

    const [abierto, setAbierto] = useState(false)

    const {img} = props
    return(
        <header>
            <nav className="bg-lime-400 py-3 fixed top-0 left-0 right-0 shadow-md md:flex md:justify-between md:items-center flex justify-between items-center">
                <div className="flex">
                    <button className="ml-4 mr-6" onClick={()=>setAbierto(true)}>
                        <Menu/>
                    </button>
                    <figure>
                        <Link to="/">
                            <img className="w-16" src={img} alt="Logo"/>  
                        </Link>
                    </figure>
                </div>
                <div className={`${!abierto && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={()=>setAbierto(false)}></div>  

                <div className={`${abierto ? "w-80" : "w-0"} bg-cyan-600 min-h-screen  fixed top-0 left-0 transition-all duration-300`}>
                    <div className={`${!abierto && "hidden"} pt-3`}>
                        <button className="text-white ml-4 pt-4  mb-14" onClick={()=>setAbierto(false)}>
                            <X/>
                        </button>
                        <div className="flex flex-col">
                            <NavLink to={`/categoria/plantas`}className="text-white text-center text-xl mt-14 hover:text-gray-700" onClick={()=>setAbierto(false)}>Plantas</NavLink>  
                            <NavLink to={`/categoria/centro de mesas`}className="text-white text-center text-xl mt-14 hover:text-gray-700" onClick={()=>setAbierto(false)}>Centros de mesas</NavLink>
                            <NavLink to={`/contacto`}className="text-white text-center text-xl mt-14 hover:text-gray-700"onClick={()=>setAbierto(false)} >Contacto</NavLink>
                        </div>
                    </div> 
                </div>
                <div>
                     <button><CartWiget/></button>
                </div>
            
            </nav>
        </header>
        

    )
}

export default NavBar

