import TrendingCardData from '../../Data/TrendingCard'
import TrendingCard from '../TrendingCard/TrendingCard'
import './TrendingCards.css'

function TrendingCards() {
    return (
        <div className='TrendingCards'>
            {TrendingCardData.map((card) => {
                return(
                    <TrendingCard key={card.id} 
                    image={card.image} 
                    price={card.price}
                    title={card.title}
                    location={card.location}/>
                )
            })}
        </div>
    )
}

export default TrendingCards
