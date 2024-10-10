import './Footer.css'
import footer_logo from '../../../public/Assets/logo_big.png'
import instagram_icon from '../../../public/Assets/instagram_icon.png'
import pintester_icon from '../../../public/Assets/pintester_icon.png'
import whatsapp_icon from '../../../public/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>DANIA</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
                <div className='footer-social-icon'>
                    <div className='footer-icons-container'>
                        <img src={instagram_icon} alt="" />
                    </div>

                    <div className='footer-icons-container'>
                        <img src={pintester_icon} alt="" />
                    </div>

                    <div className='footer-icons-container'>
                        <img src={whatsapp_icon} alt="" />
                    </div>

                </div>
                <div className='footer-copyright'>
                    <hr />
                    <p>Copy @ 2024 - All Right Reserved</p>

                </div>
    </div>
  )
}

export default Footer
