import './BestDealsCard.css'
interface Deals {
    image:string,
    text1:string,
    text2:string,
}
function BestDealsCard({image,text1,text2} :Deals ) {
    return (
        <div className='BestDealsCard' data-aos="zoom-in-up">
            <img src={image} alt="" />
            <div className='BDC3D'>
                <span className='fontsize12 weight400'>{text1}</span>
                <span className='fontsize12 weight400'>{text2}</span>
            </div>
        </div>
    )
}

export default BestDealsCard
