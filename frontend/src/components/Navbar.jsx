import { React, useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RiLoginCircleFill } from "react-icons/ri";

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
            icon: isMenuToggle ? <FaArrowAltCircleLeft /> : <GiHamburgerMenu />,
            label: '',
            function: menuToggleHandle,
            path: '#'
        },
        {
            icon: isMenuToggle ? <IoHome /> : <IoHome />,
            label: 'Home',
            function: () => activeMenuHandle(1),
            path: '/'
        },
        {
            icon: isMenuToggle ? <RiLoginCircleFill/> : <RiLoginCircleFill />,
            label: 'Sign In',
            function: () => activeMenuHandle(2),
            path: '/signin'
        }
    ]


    return (
        <div className={`flex flex-col justify-between bg-primary ${isMenuToggle ? 'w-[12rem]' : 'w-[4rem]'} text-textPrimary shadow-md shadow-[#000000]`}>
            <ul className={`flex flex-col ${!isMenuToggle ? 'items-center' : 'items-start'}`}>
                {navbarItem.map((item, index) => (
                    <Link key={index}
                        to={item.path}
                        onClick={item.function}
                        className={`hover:bg-secondary w-full ${isActiveMenu === index ? ' bg-background' : ''} p-5 duration-300`} href="#">
                        <li className='flex items-center text-2xl space-x-3 font-bold '>{item.icon} {isMenuToggle ? <span className='text-sm'>{item.label}</span> : ''}
                        </li></Link>
                ))}

            </ul>
        </div>
    )
}

export default Navbar