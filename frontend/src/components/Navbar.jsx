import { React, useState } from 'react'
import { MdSpaceDashboard, MdCloudUpload } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Navbar() { 
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const [isActiveMenu, setisActiveMenu] = useState(1);

    const menuToggleHandle = () => {
        setIsMenuToggle(!isMenuToggle)
        console.log(isMenuToggle)
    };

    const activeMenuHandle = (index) => {
        setisActiveMenu(index)
        console.log(isMenuToggle)
    };

    const navbarItem = [
        {
            icon: isMenuToggle ? <FaArrowAltCircleLeft />:<GiHamburgerMenu />,
            label: '',
            function: menuToggleHandle,
            path: '#'
        }
    ]


    return (
        <div className={`flex flex-col justify-between bg-primary ${isMenuToggle ? 'w-[12rem]':'w-[4rem]'} text-textPrimary shadow-md shadow-[#000000]`}>
            <ul className='flex flex-col text-2xl'>
            {navbarItem.map((item, index) => (
                <Link key={index} to={item.path} onClick={item.function} className={`hover:bg-secondary ${isActiveMenu === index ? ' bg-background':''} p-5 duration-300`} href="#"><li className='flex items-center space-x-3 font-bold '>{item.icon} {isMenuToggle ? item.label:''}</li></Link>
            ))}
            
            </ul>
        </div>
    )
}

export default Navbar