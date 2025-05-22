import './TrendingCard.css'
interface TrendingCard {
    image:string,
    title:string,
    location:string,
    price:number,
}
function TrendingCardData({price,image,title,location}:TrendingCard) {
    return (
        <div className='TrendingCard shadow' data-aos="zoom-in-up" >
            <div className='TCImg'>
                <img src={image} alt="Apartment image" />
            </div>
            <div className='TCText'>
                <p className='fontsize18 weight600'>${price}</p>
                <h3 className='fontsize18 weight600'>{title}</h3>
            </div>
            <p className='TCLocation fontsize14 weight400'><img src="/assets/images/location2.svg" alt="" />{location}</p>
        </div>
    )
}

export default TrendingCardData
