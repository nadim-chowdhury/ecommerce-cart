import React, { useEffect, useState } from "react";


export default function ProductDetails() {

    const [product, setProduct] = useState([]);

    const fetchData = () => {
      return fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div className="pd flex justify-center items-center">
      <div>
        <img />
      </div>

      <div>
        <h1>{product.title}</h1>
        <h2>Price</h2>
        <h4>Category</h4>
        <p>Description</p>
        <button className="w-[90%] " id="add-cart">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
