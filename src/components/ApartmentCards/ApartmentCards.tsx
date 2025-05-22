import ApartmentData from '../../Data/ApartmentCards'
import Card from '../Card/Card'
import './ApartmentCards.css'


function ApartmentCards() {
    return (
        <div className='ApartmentCards'>
            {ApartmentData.map((card) => {
                return(
                    <Card key={card.id} title={card.title} desc={card.desc} image={card.image}/>
                )
            })}
        </div>
    )
}

export default ApartmentCards
