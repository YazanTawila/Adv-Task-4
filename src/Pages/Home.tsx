import Deals from '../sections/Deals/Deals'
import DreamHome from '../sections/DreamHome/DreamHome'
import Hero from '../sections/Hero/Hero'
import Trending from '../sections/Trending/Trending'
import Works from '../sections/Works/Works'

function Home() {
    return (
        <>
        <Hero title='Discover a place you will love to live'  
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.'
        />
        <Works/>
        <DreamHome/>
        <Trending/>
        <Deals/>
        </>
    )
}

export default Home
