import { useEffect, useState } from "react"

const useProducts =()=>{
    const[products,setproducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res =>res.json())
        .then(data =>setproducts(data))
    },[]);
    return [products]
}
export default useProducts;