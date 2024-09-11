import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer(props) {

  const {img} = props
  return (
    <footer className='w-100 bg-gray-400'>
        <div className='w-100 max-w-[1542px] m-auto grid justify-items-center grid-cols-3 gap-12 pt-11 px-0'>
            <div>
                <figure className='w-100 h-100 flex justify-center items-center'>
                    <Link to={"/"}>
                        <img className='w-64' src={img} alt='Logo'/>
                    </Link>
                </figure>
            </div>
            <div>
                <h2 className='text-white mb-6 text-2xl'>SOBRE NOSOTROS</h2>
                <p className='text-white '>Somos una empresa pequeña amante de las plantas y todos sus derivados. Comenzamos hace poco en este mundo, espero que te guste nuestro trabajo.</p>
            </div>
            <div>
                <h2 className='text-white mb-6 text-2xl'>SIGUENOS</h2>
                <div>
                    <Link to={"https://www.instagram.com/las.sucus.de.sil/"} className='inline-block w-12 h-12 leading-[48px] text-white mr-4 bg-[#0d2033] text-center'><FaInstagram className='w-9 h-8 mt-2 ml-1.5' /></Link>
                    <Link to={"https://www.facebook.com/profile.php?id=100086557930938&mibextid=ZbWKwL"} className='inline-block w-12 h-12 leading-[48px] text-white mr-4 bg-[#0d2033] '><FaFacebookF className='w-9 h-8 mt-2 ml-1.5' /></Link>
                </div>
            </div>
        </div>
        <div>
            <small>&copy; 2024 <b>Las Sucus De Sil</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
  )
}
