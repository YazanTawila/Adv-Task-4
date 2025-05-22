import ApartmentCards from '../../components/ApartmentCards/ApartmentCards'
import TitleComponent from '../../components/TitleComponent/TitleComponent'
import './Works.css'

function Works() {
    return (
        <section className='Works container-x container-bottom container-top'>
            <TitleComponent 
            title='How it Works'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
            />
            <ApartmentCards/>
        </section>
    )
}

export default Works
