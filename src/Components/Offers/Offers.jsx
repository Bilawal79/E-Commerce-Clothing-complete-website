import './Offers.css'
import exclusive_image from '../../../public/Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers '>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className='offers-right'>
            <img src={exclusive_image} style={{width:250}} alt="" />

        </div>
      
    </div>
  )
}

export default Offers
