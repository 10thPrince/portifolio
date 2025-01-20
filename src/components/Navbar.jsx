import React from 'react';
import Logo from '../assets/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo-image" className='w-[50px]' />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <FaBars />
            </div>

            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar