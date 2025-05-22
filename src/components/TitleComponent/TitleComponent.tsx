import './TitleComponent.css'
interface Title {
    title : string,
    desc: string,
}
function TitleComponent({title,desc} : Title) {
    return (
        <div className='TitleComponent'data-aos="fade-up">
            <h2 className='fontsize40 weight700'>{title}</h2>
            <p className='fontsize16 weight400'>{desc}</p>
        </div>
    )
}

export default TitleComponent
