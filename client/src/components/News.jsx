import React from "react";
import newsImage1 from "../pictures/news-1.png";
import newsImage2 from "../pictures/news-2.png";
import newsImage3 from "../pictures/news-3.png";
import NewsCard from "./Elements/NewsCard";

const newsData = [
  {
    image: newsImage1,
    heading: "Falusi CSOK 2024",
    text: "Új lakóház vásárlásánál 2024-ben a jelenlegi (2023. végéig érvényes) CSOK támogatási összegek lesznek érvényesek a preferált kistelepüléseken.",
    path: "/falusi-csok-2024",
  },
  {
    image: newsImage2,
    heading: "Mekkora lakást vehetünk 35 millió forintból?",
    text: "Pesten egy garzonlakást lehet venni, ha valaki egy korábbi lakását eladja 25 millióért és felvesz rá egy tízmilliós hitelt.",
    path: "/mekkora-lakast-vehetunk-35-milliobol",
  },
  {
    image: newsImage3,
    heading: "Intelligens szellőzőrendszerek előnyei",
    text: "Az építészeti trendek és szabályozások változásával új technológiák születnek.",
    path: "/az-intelligens-szellozorendszerek-elonyei",
  },
];

function News() {
  return (
    <div className="w-auto md:w-10/12 mx-auto py-8 my-4">
      <p className="section-heading">
        <span className="section-heading-blue ml-2 md:ml-0">Hírek</span>,
        elemzések
      </p>
      <div className="w-full overflow-auto md:overflow-hidden">
        <div className="md:w-full inline-block md:flex gap-4 mt-8 justify-items-stretch">
          {newsData.map((news) => (
            <NewsCard news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
