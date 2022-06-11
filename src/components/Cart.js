import React, {useState} from 'react';
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars';
import Items from './Items';
import { products } from './Products';

const Cart = () => {

    const [item, setItem] = useState(products);

    return(
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon"></img>
                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt='cart'></img>
                    <p>7</p>
                </div>
            </header>
            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items'>you have <span className='total-items-count'>7</span> items in Shoping Cart</p>
                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>
                            {
                                item.map((curItem) => {
                                  return  <Items key={curItem.id} {...curItem}/>
                                })
                            }
                          
                        </Scrollbars>
                    </div>

                </div>
                <div className='card-total'>
                    <h3> cart Total:<span>22000</span></h3>
                    <button>checkout</button>
                </div>
            </section>
        </>
    )

}

export default Cart;