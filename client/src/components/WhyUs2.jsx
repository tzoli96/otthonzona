import React from "react";
import whyUsImage from "../pictures/why-us-2.png";
import checkboxIcon from "../icons/check.svg";
import useIsMobile from "../utils/useIsMobile";
import {Link} from "react-router-dom";

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
      <div className="w-10/12 mx-auto py-8 my-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mt-8 md:mt-0 flex order-1 lg:order-2 text-center">
          <img src={whyUsImage} alt="" className="w-auto h-auto w-max-full max-lg:max-h-[500px] m-auto"/>
        </div>

        <div className="flex order-2 lg:order-1 w-full">
          <div>
            <p className="section-heading">
              Miben <span className="text-blue">tudunk segíteni?</span>
            </p>

            <div className="my-2">
              {points.map((p) => (
                  <div className="flex gap-3 text-lightgrey my-4">
                    <img src={checkboxIcon} className="h-6 w-6"/>
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
      </div>
  );
}

export default WhyUs2;
