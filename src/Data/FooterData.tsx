interface links {
    id:number,
    text:string,
    path:string,
}
interface social {
    id:number,
    img: string,
    path:string,
}
export const services : links [] = [
        {
            id:1,
            text : "Payment & Tax",
            path : "/",
        },
        {
            id:2,
            text : "Features",
            path : "/",
        },
        {
            id:3,
            text : "View Booking",
            path : "/",
        },
        {
            id:4,
            text : "Support",
            path : "/",
        },
]
export const About : links [] = [
        {
            id:1,
            text : "About us",
            path : "/about",
        },
        {
            id:2,
            text : "News",
            path : "/",
        },
        {
            id:3,
            text : "Pricing",
            path : "/",
        },
        {
            id:4,
            text : "New Property",
            path : "/",
        },
]
export const Social : social[] = [
        {
            id:1 ,
            img : "/assets/images/facebook.svg",
            path : "https://www.facebook.com/",
        },
        {
            id:2,
            img : "/assets/images/twitter.svg",
            path : "https://twitter.com/",
        },
        {
            id:3,
            img : "/assets/images/linkedin.svg",
            path : "https://www.linkedin.com/",
        },
]
