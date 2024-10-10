import './Breadcrum.css'
import arrow_icon from '../../../public/Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className="braedcrum">
        Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name};
      
    </div>
  )
}

export default Breadcrum;
