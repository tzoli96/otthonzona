import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { text: "Falusi CSOK 2024", path: "/falusi-csok-2024" },
  {
    text: "Mekkora lakást vehetünk 35 millióból",
    path: "/mekkora-lakast-vehetunk-35-milliobol",
  },
  {
    text: " Az intelligens szellőzőrendszerek előnyei",
    path: "/az-intelligens-szellozorendszerek-elonyei",
  },
];

function TopArticles() {
  return (
    <div className="card p-4 !rounded-2xl">
      <p className="card-heading">Top cikkek</p>
      {articles.map((article, index) => (
        <div
          className="grid gap-3 my-2"
          style={{ gridTemplateColumns: "20px 1fr" }}
        >
          <div className="flex items-center text-2xl font-bold">
            <span className="text-orange">{index + 1}</span>
          </div>
          <div>
            <Link to={article.path}>
              <p className="text-sm text-gray-900 font-bold">{article.text}</p>
            </Link>
            <span className="text-blue text-xs font-medium">2024.01.01.</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopArticles;
