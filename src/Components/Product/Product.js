import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name,price,stock,img,category,seller,star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = "product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className = 'product-name'>{name}</h2>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>

                <Rating
                  initialRating={star} 
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                ></Rating>

                <br/>
                <p><small>Only {stock} Left in Stock - Order Soon</small></p>
                <button 
                onClick ={()=>props.handleAddToCart(props.product)}
                 className = 'btn-regular'>{cartIcon}add to cart</button>
            </div>       
        </div>
    );
};

export default Product;