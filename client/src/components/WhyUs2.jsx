import React from "react";
import whyUsImage from "../pictures/why-us-2.png";
import checkboxIcon from "../icons/check.svg";
import useIsMobile from "../utils/useIsMobile";
import { Link } from "react-router-dom";

const points = [
  "Eladás: Értékesítési segítség, piacismeret.",
  "Vétel: Egyéni igényeknek megfelelő találat.",
  "Kölcsön, hitel: Díjmentesen megtalálni jövedelmi helyzetének megfelelő ingatlankölcsönt vagy jelzáloghitelt.",
  "Biztosítás: Segítünk megtalálni szintén díjmentesen az Önnek megfelelő ingatlan-és/vagy vagyonbiztosítást.",
  "Tudunk ajánlani profi költöztetőket, akik segítenek berendezni ingatlanját.",
  "Személyre szabott megoldásokkal nyújtunk tanácsot Önnek.",
  "Válogathat a legtöbb magyarországi kivitelező kínálata közül.",
  "Kalkulálni tud hitelkalkulátorunkkal, hogy milyen keretből tudja megvalósítani álmai ingatlanját.",
];

function WhyUs2() {
  const isMobile = useIsMobile();

  return (
    <div className="px-8 md:px-0 w-full md:w-10/12 mx-auto py-8 my-4 md:grid grid-cols-2 gap-6">
      {isMobile && (
        <div className="flex justify-center items-center">
          <img src={whyUsImage} alt="" className="max-w-[100%] w-full" />
        </div>
      )}
      <div className="md:flex items-center">
        <div>
          <p className="section-heading">
            Miben <span className="text-blue">tudunk segíteni?</span>
          </p>

          <div className="my-2">
            {points.map((p) => (
              <div className="flex gap-3 text-lightgrey my-4">
                <img src={checkboxIcon} className="h-6 w-6" />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <div>
            <Link to="/about-us">
              <button className="orange-button my-4">Tudj meg többet</button>
            </Link>
          </div>
        </div>
      </div>
      {isMobile ? null : (
        <div className="flex justify-center items-center">
          <img src={whyUsImage} alt="" className="max-w-[100%] w-3/4" />
        </div>
      )}
    </div>
  );
}

export default WhyUs2;
