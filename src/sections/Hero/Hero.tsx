import Apartment from '../../Data/HeroApartment'
import './Hero.css'
interface HeroContent {
    title:string,
    desc:string,
}
function Hero({title,desc} : HeroContent ) {
    return (
        <section className='Hero ' data-aos="zoom-in">
            <div className='HeroLeft'>
                <div className='Hero-Text'>
                    <h1 className='fontsize60 weight700'>{title}</h1>
                    <p className='fontsize16px weight400'>{desc}</p>
                </div>
                <div className='Hero-Apartments'>
                    {Apartment.map((apar,index) => {
                    return(
                        <div key={index} className='Apartment'>
                            <div className='ApartmentImg'>
                                <img src={apar.img} alt="" />
                            </div>
                            <div>
                                <h4 className='fontsize16 weight500'>{apar.titleApar}</h4>
                                <p className='fontsize16 weight400'>{apar.descApar}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className='Hero-img'>
                <img src="/assets/images/Building.png" alt="Building Image" />
            </div>
        </section>
    )
}

export default Hero
