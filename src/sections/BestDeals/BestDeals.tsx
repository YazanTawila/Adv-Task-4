import { useState } from 'react'
import DealsData from '../../Data/Deals'
import BestDealsCard from '../../components/BestDealsCard/BestDealsCard'
import './BestDeals.css'
interface Deals {
    id:number,
    image:string,
    category:string,
    text1:string,
    text2:string,
}
function BestDeals() {
    const [item ,setItem] = useState<Deals[]>(DealsData.filter((item) => item.category === "Residential Property"));
    const [activeCat, setActiveCat] = useState<string>("Residential Property")
    const menuItems = ["Residential Property" ,"Commercial Property" ,"Agriculture Property","Industrial Property"]
    const filterItem = (current:string)  =>{
        const newItem = DealsData.filter((newVal) => {
            return newVal.category=== current;
        });
        setItem(newItem);
    }
    
    return (
        <div className='BestDeals'>
            <div  className='FilterBtns' >
                <div className='FilterBtnsContent' data-aos="fade-left">
                    {menuItems.map((val,index)=>{
                        return(
                            <button className={activeCat === val ? "fontsize18 fontweight400 activeCat" : "fontsize18 fontweight400"} key={index} onClick={() =>{filterItem(val);setActiveCat(val)}}>{val}</button>
                        );
                    })}
                </div>
            </div>
            <div className='BestDealsCards'>
                {item.map((card) => {
                return(
                    <BestDealsCard key={card.id} image={card.image} text1={card.text1} text2={card.text2}/>
                )
                })}
            </div>
        </div>
    )
}

export default BestDeals
