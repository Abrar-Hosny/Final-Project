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
       

        {Products.length > 0 ? Products.map((product) => (
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
        )) : <div className="sk-cube-grid my-auto">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>}
      </div>
    </>
  );
}
