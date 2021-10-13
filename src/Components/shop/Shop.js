import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProduct,setDisplayProduct] = useState([])

    useEffect(() =>{
        // console.log('Product API called')
        fetch('./products.json')
        .then(res => res.json())
        .then(data => 
            {setProducts(data);
                setDisplayProduct(data);
            // console.log('Product receive');
        })
    },[])
    





    useEffect(() => {
        // console.log('Local storage called')
       if(products.length){
        const savecart = getStoredCart();
        const storedCart = [];
        for (const key in savecart){
            const addedProduct = products.find(product => 
                product.key === key);
            if(addedProduct){
                const quantity = savecart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
       }
       setCart(storedCart);
        }
    },[products])

    const handleAddToCart =(product) =>{
        const exists = cart.find(pd => pd.key ===product.key);
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd =>pd.key !==product.key);
            exists.quantity =exists.quantity + 1;
            newCart = [...rest,product];
        }
        else{
            product.quantity =1;
            newCart = [...cart,product];
        }
        // const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key)
    }

    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProducts);
       
    }

    return (
        <div>
            <div className="search-container">
                <input type="text"
                onChange = {handleSearch}
                placeholder='Search Your Product' />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h3>Products: {products.length}</h3>
                    {
                       displayProduct.map(product => <Product
                        key = {product.key}
                         product = {product}
                         handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="order-container">
                    <Cart cart ={cart}>
                        <Link to ="/review">
                            <button className ="btn-regular">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;