import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const [products, setProducts] = useState({});
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const { id } = location.state || 0 ;
    console.log(id);

        useEffect(() => {
            fetch(`https://e-learning-server-nu.vercel.app/products/${id}`)
              .then((res) => res.json())
              .then((data) => {
                 setProducts(data)
                 setLoading(false)
                 console.log("product details "+data);
              });
          }, []);
          
    return (
      <div>
        {isLoading && (
          <div className="mx-auto text-center mt-10">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        <div className="flex justify-center my-10 mx-5">
          <div className="mx-5 w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-2 border-blue-500">
            <img  src={products.img_url} />
          </div>
          <div className="flex-col w-[600px]">
          <h1 className="text-xl font-bold">{products.title}</h1>
          <p className="italic pt-2">{products.details}</p>
          <div className="flex justify-between">
          <p className="pt-2 text-lg"><span><b>Lesson:</b> </span> {products.lession}</p>
          <p className="pt-2 text-lg"><span><b>Student:</b> </span> {products.student}</p>
          <p className="pt-2 text-lg"><span><b>Duration:</b> </span> {products.duration}</p>
          </div>

          <div className="flex justify-between">
          <p className="pt-2 text-lg"><span><b>Price:</b> </span> {products.price}</p>
          <p className="pt-2 text-lg"><span><b>Assessments:</b> </span> {products.assessments}</p>
          <p className="pt-2 text-lg"><span><b>Author:</b> </span> {products.author}</p>
            </div>
            <div className="flex justify-between">
            <p className="pt-2 text-lg"><span><b>Level:</b> </span> {products.level}</p>
            <p className="pt-2 text-lg"><span><b>Ratings:</b> </span> {products.ratings}</p>
                </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;