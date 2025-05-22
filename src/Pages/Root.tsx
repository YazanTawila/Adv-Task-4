import { Outlet } from "react-router-dom"
import NavBar from "../sections/Navbar/NavBar"
import Footer from "../sections/Footer/Footer"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

function Root() {
    useEffect (() => {
        AOS.init({duration: 2000})
    },[])
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Root
