import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center p-6 font-bold text-6xl">Get Your Product</h1>
      <div className="products">
        {product.map((productData) => {
          return <Product data={productData} />;
        })}
      </div>
    </>
  );
};

export default Products;
