interface NavBarLinks {
    id:number,
    link:string,
    path:string,
}
const NavLinks : NavBarLinks [] = [
    {
        id:1 ,
        link: "Home",
        path: "/"
    },
    {
        id:2 ,
        link: "About",
        path: "/about"
    },
    {
        id:3 ,
        link: "Service",
        path: "/service"
    },
    {
        id:4 ,
        link: "New Property",
        path: "/property"
    },
    {
        id:5 ,
        link: "Contact",
        path: "/contact"
    },
]
export default NavLinks ;