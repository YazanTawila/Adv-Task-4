import { Outlet } from "react-router-dom"
import NavBar from "../sections/Navbar/NavBar"
import Footer from "../sections/Footer/Footer"
import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import PageLoading from '../PageLoading/PageLoading'
function Root() {
        const [loading,setLoading] = useState<boolean>(false)

        useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
        }, []);
    useEffect (() => {
        AOS.init({duration: 2000})
    },[])
    return( 
        <>
        {loading ? <PageLoading/> : <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
        }
    </>
    )
}

export default Root
