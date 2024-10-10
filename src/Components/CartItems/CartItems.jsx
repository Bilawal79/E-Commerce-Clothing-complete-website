import  { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../../public/Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext); 
  return (
    <div className='cartitems'>
        <div className="cartitems-fomat-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e, index) => {
            if(cartItems[e.id]>0) {
                return (
                    <div key={index}>  
                        <div className='cartitems-format cartitems-fomat-main'>
                           <img src={e.image} alt="" className='carticon-product-icon'/>
                           <p>{e.name}</p>
                           <p>Rs{e.new_price}</p>
                           <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                           <p>Rs{e.new_price*cartItems[e.id]}</p>
                           <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                )
            }
            return null; 
        })}
        <div className='cartitem-down'>
        <div className='cartitem-total'>
            <h1>Cart Totals</h1>
            <div>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>Rs{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>Rs{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'></div>
            <input type="text" placeholder='Promo Code'/>
            <button>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default CartItems;
