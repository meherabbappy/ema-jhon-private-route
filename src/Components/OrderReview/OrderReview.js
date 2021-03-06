import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import {useHistory} from 'react-router';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products); 
    const history = useHistory();

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart);
       removeFromDb(key);
    }

    const handleProccedToShipping = () =>{
        // setCart([]);
        // clearTheCart();
        history.push("/shipping");
    }
    
    return (
        <div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem 
                            key = {product.key}
                            product={product}
                            handleRemove = {handleRemove}
                            ></ReviewItem>)
                    }
                </div>

                <div className="order-container">
                     <Cart cart = {cart}>
                         
                             <button onClick = {handleProccedToShipping} className ="btn-regular">Procced To Order</button>
                      
                     </Cart>
                </div>

            </div>
            
        </div>
    );
};

export default OrderReview;