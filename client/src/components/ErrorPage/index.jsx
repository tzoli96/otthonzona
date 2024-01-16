import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200">
        <div className="text-center py-28">
          <h className="text-[120px] text-[#006FB9] font-extrabold">
            4<span className="text-[#FF9B06]">0</span>4
          </h>
          <p className="text-[#006FB9] font-black px-5 lg:text-4xl text-2xl">
            Hoppá! Ez a lap nem található.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
