import axios from "axios";
import React, { useEffect, useState } from "react";
// import style from "./RecentProducts.module.css"

export default function RecentProducts() {
  const [Products, setProducts] = useState([]);
  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((res) => {});
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="flex flex-wrap py-5 ">
       

        {Products.map((product) => (
          <div className="w-1/6 mr-4">

            
            <div className="product border border-black rounded-lg mb-3" key={product.id}>
              <img src={product.image} className="w-30 h-20 object-contain mx-auto mt-3" alt="" />
              <h3 className="text-emerald-600">{product.category}</h3>
              <h3 className="mb-4  font-semibold">{product.title.split(" ").slice(0,2).join(" ")}</h3>
              {console.log(product.image)}
            <div className="flex justify-between p-3">
              <span>${product.price}</span>
              <span><i className="fa fa-star text-yellow-300"></i>{product.rating.rate}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
