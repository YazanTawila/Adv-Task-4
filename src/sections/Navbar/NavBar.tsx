import { useState } from 'react'
import NavLinks from '../../Data/NavLinks'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    return (
        <>
        <nav className={`container-x navBar ${isOpen ? 'bg-color' : ''}`}>
            <img className='navIcon' src="/assets/images/FloraIcon.svg" alt="Flora Icon" />
            <ul className='smallscreen'>
                {NavLinks.map((link,index) => {
                    return(
                        <li key={index} className='fontsize16 weight500'><NavLink className={({ isActive}) => isActive ? "active" : ""} to={link.path}>{link.link}</NavLink></li>
                    )
                })}
            </ul>
            <NavLink to={"/"} className='Login smallscreen fontsize14 weight400'>Login</NavLink>
            <img onClick={() => setIsOpen(!isOpen)} className='menubar'src={isOpen ? "/assets/images/MenuX.svg" : "/assets/images/Menu.svg"} alt="" />
        </nav>
        <div className={`navMenu ${isOpen ? "open" : ""}`}>
            <div className='links'>
                {NavLinks.map((link,index) => {
                    return(
                        <NavLink key={index} className={({ isActive}) => isActive ? "active2 fontsize24 weight400" : "fontsize24 weight400"} to={link.path}>{link.link}</NavLink>
                    )
                })}
            </div>
            <a className='Login fontsize14 weight400'>Login</a>
        </div>
        </>
    )
}

export default NavBar
