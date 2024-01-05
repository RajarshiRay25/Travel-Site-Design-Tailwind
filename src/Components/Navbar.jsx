import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
const Navbar = () => {
    const[nav,setNav] = useState(false)
    const toggleNavbar =()=>{
        setNav(!nav)
    }
    return (
        <div className='w-full bg-gray-600 min-h-[50px] flex justify-between items-center absolute z-10 text-white'>
            <ul className='hidden sm:flex px-4'>
                <li className='p-4'>
                    <a href="/">Home</a>
                </li>
                <li className='p-4'>
                    <a href="#gallery">Gallery</a>
                </li>
                <li className='p-4'>
                    <a href="#deals">Deals</a>
                </li>
                <li className='p-4'>
                    <a href="#contact">Contact Us</a>
                </li>
            </ul>
            <div className='flex justify-between'>
                <FaFacebook className='mx-4' />
                <FaTwitter className='mx-4' />
                <FaInstagram className='mx-4' />
                <FaGithub className='mx-4' />
            </div>
            <div onClick={toggleNavbar} className='sm:hidden z-10'>
                <FiAlignJustify size={20} className='cursor-pointer mr-4'/>
            </div>

            {/* MOBILE NAV DESIGN */}

            <div className={nav ?'overflow-y-hidden md:hidden ease-in duration-500 absolute top-0 left-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col': 'absolute h-screen top-0 left-[-100%] ease-in duration-500'}>
                <ul className='w-full h-full text-center pt-12'>
                    <li className='p-4 text-2xl py-8'>
                        <a href="/">Home</a>
                    </li>
                    <li className='p-4 text-2xl py-8'>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className='p-4 text-2xl py-8'>
                        <a href="#deals">Deals</a>
                    </li>
                    <li className='p-4 text-2xl py-8'>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar