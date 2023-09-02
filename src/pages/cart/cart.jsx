import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import { useNavigate } from 'react-router-dom'
import './cart.css'
import { createRoutesFromChildren, renderMatches } from 'react-router-dom'
const Cart = () => {
  const { cartItems, getTotalCartAmout } = useContext(ShopContext)
  const totalAmount = getTotalCartAmout();
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your cart items
        </h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        }
          
        )}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>CheckOut</button>
        </div>
      ) : (<h1>your cart is empty</h1>)
      }
    </div>
      
  )
}

export default Cart 