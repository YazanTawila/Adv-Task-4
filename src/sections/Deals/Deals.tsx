import BestDeals from '../BestDeals/BestDeals'
import TitleComponent from '../../components/TitleComponent/TitleComponent'
import './Deals.css'

function Deals() {
    return (
        <section className='Deals container-x container-bottom '>
        <TitleComponent
            title='Best Real Estate Deals'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
            />
        <BestDeals/>
        </section>
    )
}

export default Deals
