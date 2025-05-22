import './Card.css'
interface ApartmentCard {
    image:string,
    title:string,
    desc:string,
}
function Card({image,title,desc}:ApartmentCard) {
    return (
        <div className='CardCompnent' data-aos="zoom-in-up">
            <img src={image} alt="" />
            <div className='CardDesc'>
                <h3 className='fontsize22 weight600'>{title}</h3>
                <p className='fontsize14 weight400'>{desc}</p>
            </div>
        </div>
    )
}

export default Card
