import './Home.css'
import hand_icon from '../../../public/Assets/hand_icon.png'
import arrow_icon from '../../../public/Assets/arrow.png'
import hero_image from '../../../public/Assets/hero_image.png'

const Home = () => {
  return (
    <div className="home">
        <div className='home-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='home-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />

                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className='home-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='home-right'>
            <img src={hero_image} style={{width:450}} alt="" />

        </div>
      
    </div>
  )
}

export default Home
