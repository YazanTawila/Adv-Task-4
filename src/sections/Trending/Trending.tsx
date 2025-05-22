import TitleComponent from '../../components/TitleComponent/TitleComponent'
import TrendingCards from '../../components/TrendingCards/TrendingCards'
import './Trending.css'

function Trending() {
    return (
        <section className='Trending container-x container-bottom container-top '>
            <TitleComponent
            title='Most Trending'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
            />
            <TrendingCards/>
        </section>
    )
}

export default Trending
