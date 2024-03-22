import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4
    relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/*imagem*/}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 cursor-pointer transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/*botões*/}
        <div className="absolute top-4 -right-8 group-hover:right-3 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-10 h-10 bg-green-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={"/"}
            className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;
