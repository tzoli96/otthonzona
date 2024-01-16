import React from "react";
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <div className="p-3 rounded-2xl bg-white w-full sm:w-[45%]sm:mx-2 inline-block">
      <div className="rounded-2xl overflow-hidden">
        <img src={news.image} alt="" className="min-w-full" />
      </div>
      <div>
        <p className="text-blue mt-4 font-bold text-sm">2024.01.01</p>
        <p className="card-heading mt-1 min-h-[80px]">{news.heading}</p>
        <p className="text-lightgrey text-sm min-h-[80px]">{news.text}</p>
      </div>
      <div className="my-2">
        <Link to={news.path}>
          <button className="orange-button">Tovább olvasom</button>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
