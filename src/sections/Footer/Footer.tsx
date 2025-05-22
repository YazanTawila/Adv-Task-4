import { Link, NavLink } from 'react-router-dom'
import { About, services, Social } from '../../Data/FooterData'
import './Footer.css'
function Footer() {
    return (
        <section className='Footer container-x '>
            <div className='FooterTop'>
                <div className='FTLeft'>
                    <img src="/assets/images/FloraIcon.svg" alt="Flora Icon" />
                    <p className='fontsize16 weight400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
                </div>
                <div className='FTRight'>
                    <div className='FTGroup'>
                        <h3 className='fontsize20 weight700'>Service</h3>
                        <ul>
                            {services.map((link) => {
                                return(
                                    <li key={link.id} className='fontsize16 weight400'><NavLink className={({ isActive}) => isActive ? "" : ""} to={link.path}>{link.text}</NavLink></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='FTGroup'>
                        <h3 className='fontsize20 weight700'>About</h3>
                        <ul>
                            {About.map((link) => {
                                return(
                                    <li key={link.id} className='fontsize16 weight400'><NavLink className={({ isActive}) => isActive ? "" : ""} to={link.path}>{link.text}</NavLink></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='FTGroup'>
                        <h3 className='fontsize20 weight700'>Our Location</h3>
                        <p className='fontsize16 weight400'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                        <div className='SocialLinks'>
                            {Social.map((link) => {
                                return(
                                    <Link to={link.path} className='Social' key={link.id}><img src={link.img} alt="" /></Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='FooterBottom'>
                <p className='fontsize16 weight400'>Copyright 2024 flora. All Rights Reserved</p>
                <div className='FBRight'>
                    <p className='fontsize16 weight400'>Terms & Conditions</p>
                    <p className='fontsize16 weight400'>Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
