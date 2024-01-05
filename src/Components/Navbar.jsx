import React,{useState} from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FaFacebook,FaTwitter ,FaInstagram ,FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#contact">Contact Us</a>
            </li>
        </ul>
        <div>
            <FaFacebook className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaInstagram className='mx-4'/>
            <FaGithub className='mx-4'/>
        </div>
    </div>
  )
}

export default Navbar