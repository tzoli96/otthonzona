import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import newsCover from "../../pictures/news-cover.png";
import news1 from "../../pictures/newsp-1.png";
import news2 from "../../pictures/newsp-2.png";
import news3 from "../../pictures/newsp-3.png";
import news4 from "../../pictures/newsp-4.png";
import news5 from "../../pictures/newsp-5.png";
import news6 from "../../pictures/newsp-6.png";
import NewsCard from "../Elements/NewsCard";
import TopArticles from "./TopArticles";
import Categories from "./Categories";

const newsData = [
  {
    image: news1,
    heading: "Falusi CSOK 2024",
    text: "Új lakóház vásárlásánál 2024-ben a jelenlegi (2023. végéig érvényes) CSOK támogatási összegek lesznek érvényesek a preferált kistelepüléseken.",
    path: "/falusi-csok-2024",
  },
  {
    image: news2,
    heading: "Mekkora lakást vehetünk 35 millió forintból?",
    text: "Pesten egy garzonlakást lehet venni, ha valaki egy korábbi lakását eladja 25 millióért és felvesz rá egy tízmilliós hitelt.",
    path: "/mekkora-lakast-vehetunk-35-milliobol",
  },
  {
    image: news3,
    heading: "Intelligens szellőzőrendszerek előnyei",
    text: "Az építészeti trendek és szabályozások változásával új technológiák születnek.",
    path: "/az-intelligens-szellozorendszerek-elonyei",
  },
];

function NewsPage() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        <div className="p-4">
          <div className="w-full hidden sm:block">
            <img src={newsCover} className="w-full rounded-lg" />
          </div>
          <div className="w-full my-4">
            <TopArticles />
          </div>
          {/*<div className="w-full my-4">
                          <Categories />
                      </div>*/}
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="text-2xl font-bold ml-6">Hírek</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-12 pt-6 pl-6">
            {newsData.map((news) => (
              <NewsCard news={news} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
