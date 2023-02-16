import React from "react";

const Product = (props) => {
  const { id, title, price, description, category, image } = props.data;

  return (
    <div className="product">
      <div>
        <img className="w-36 h-36" src={image} />
        <h4 className="text-2xl">{title}</h4>
      </div>
      <div>
        <h2 className="font-bold">{category}</h2>
        <h3 className="text-xl font-bold">$ {price}</h3>

        <div className="flex justify-between">
        <button className="w-[45%]" id="view-details">
        <Link to={`/products/${id}`}>

          View Details
        </Link>
        </button>
        <button className="w-[45%]" id="add-cart">
          Add To Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
