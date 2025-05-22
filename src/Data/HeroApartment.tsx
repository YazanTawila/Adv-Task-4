interface Apartment {
    id:Number,
    img:string,
    titleApar:string,
    descApar:string | number,
}
const Apartment : Apartment [] = [
    {
        id:1 ,
        img: "/assets/images/location.svg",
        titleApar: "Location",
        descApar: "Ahmedabad, India",
    },
    {
        id:2 ,
        img: "/assets/images/dollar-circle.svg",
        titleApar: "Price",
        descApar: "$1000 - $10,000",
    },
    {
        id:3 ,
        img: "/assets/images/house.svg",
        titleApar: "Type of Property",
        descApar: "Apartment",
    },
]
export default Apartment ;