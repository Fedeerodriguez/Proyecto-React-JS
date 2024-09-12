import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer(props) {

  const {img} = props
  return (
    <footer className='w-100 bg-[#0a141d] mt-8'>
        <div className='sm:w-100 max-w-[1542px] m-auto sm:grid sm:justify-items-center sm:grid-cols-3 sm:gap-12 sm:pt-11 sm:px-0  grid grid-cols-1 justify-items-center pt-8'>
            <div>
                <figure className='w-100 h-100 flex justify-center items-center'>
                    <Link to={"/"}>
                        <img className='w-56' src={img} alt='Logo'/>
                    </Link>
                </figure>
            </div>
            <div>
                <h2 className='sm:text-white sm:mb-6 sm:text-2xl sm:text-start text-center text-2xl text-white mb-6'>SOBRE NOSOTROS</h2>
                <p className='text-white sm:text-start text-center'>Somos una empresa pequeña amante de las plantas y todos sus derivados. Comenzamos hace poco en este mundo, espero que te guste nuestro trabajo.</p>
            </div>
            <div>
                <h2 className='sm:text-white sm:mb-6 sm:text-2xl sm:mt-0  text-white mb-6 text-2xl mt-3 '>SIGUENOS</h2>
                <div className='mb-3 sm:mb-0'>
                    <Link to={"https://www.instagram.com/las.sucus.de.sil/"} className='inline-block w-12 h-12 leading-[48px] text-white mr-4 bg-[#0d2033] text-center'><FaInstagram className='w-9 h-8 mt-2 ml-1.5 hover:text-cyan-400' /></Link>
                    <Link to={"https://www.facebook.com/profile.php?id=100086557930938&mibextid=ZbWKwL"} className='inline-block w-12 h-12 leading-[48px] text-white mr-4 bg-[#0d2033] '><FaFacebookF className='w-9 h-8 mt-2 ml-1.5 hover:text-cyan-400' /></Link>
                </div>
            </div>
        </div>
        <div className='bg-[#0a1a2a] p-4 px-3 text-center text-white'>
            <small className='text-sm'>&copy; 2024 <b>Las Sucus De Sil</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
  )
}
