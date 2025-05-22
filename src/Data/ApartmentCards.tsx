interface ApartmentCard {
    id:number,
    image:string,
    title:string,
    desc:string,
}
const ApartmentData : ApartmentCard [] = [
    {
        id:1 ,
        image:'/assets/images/SearchApartment.svg',
        title: "Search Apartment",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },
    {
        id:2 ,
        image:'/assets/images/SelectApartment.svg',
        title: "Select Apartment",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },
    {
        id:3 ,
        image:'/assets/images/ConfirmApartment.svg',
        title: "Confirm Apartment",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },
]
export default ApartmentData ;