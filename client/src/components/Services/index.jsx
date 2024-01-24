import React from "react";
import heroBg from "../../pictures/services/services-hero-img.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesCard from "./Sub/ServicesCard";
import serviceImg1 from "../../pictures/services/services-removal-img.png";
import serviceRemovalIcon from "../../pictures/services/services-removal-icon.svg";
import serviceImg2 from "../../pictures/services/services-realstate-img.png";
import serviceRealstateIcon from "../../pictures/services/services-realstate-icon.svg";
import serviceImg3 from "../../pictures/services/services-matterport.png";
import serviceInsuranceIcon from "../../pictures/services/services-insurance-icon.svg";
import serviceImg4 from "../../pictures/services/services-lawyer-img.png";
import serviceLawyerIcon from "../../pictures/services/services-lawyer-icon.svg";
import serviceImg5 from "../../pictures/services/services-energy-img.png";
import serviceEnergyIcon from "../../pictures/services/services-energy-icon.svg";
import serviceImg6 from "../../pictures/services/services-cleaning-img.png";
import serviceCleaningIcon from "../../pictures/services/services-cleaning-icon.svg";
import service3dIcon from "../../pictures/services/services-3d-icon.svg";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="relative">
          <img
            src={heroBg}
            alt="Hero Image"
            className="w-full hidden lg:block"
          />
          <ServicesCard />
        </div>
        <div className="bg-[#006FB9] px-5 py-10 lg:hidden">
          <h1 className="text-white text-3xl font-extrabold">Szolgáltatások</h1>
        </div>
        <h1 className="text-[#ec6608] text-xl lg:text-3xl font-extrabold text-center py-8 lg:py-16 lg:leading-normal">
          Mi segítünk{" "}
          <span className="text-[#006FB9]">
            az ingatlan ügyeid <br />
          </span>{" "}
          teljes lebonyolításában
        </h1>
        <section>
          <div className="flex pt-10 xl:pt-0 xl:items-start items-center flex-col px-6 xl:px-0 xl:flex-row xl:w-11/12 xl:mx-auto xl:gap-20">
            <img src={serviceImg1} alt="" className="hidden xl:block" />
            <div className="flex flex-col xl:gap-4 gap-2 xl:mt-16 mb-5 xl:mb-0 ">
              <img src={serviceRemovalIcon} alt="" className="xl:w-max w-10" />
              <h1 className="text-[#006FB9] xl:text-2xl text-xl font-extrabold">
                Költöztetés
              </h1>
              <p className="xl:text-md text-md text-[#949494] xl:w-10/12 text-justify">
                Költöztetést vállalunk Budapesten és vidéken egyaránt. Kedvező
                díjakkal, szakemberek által irányított és végrehajtott
                költöztetés, szállítás, tehertaxi egy helyen. Egy-egy tételt is
                szívesen elszállítunk, de elköltöztetünk egész lakásokat,
                házakat, irodaházakat. Szolgáltatásaink minden esetben
                professzionálisak és biztonságosak. Árajánlatért keresd
                ügyfélszolgálatunkat, hogy a költözés gördülékenyen, probléma
                mentesen történjen.{" "}
              </p>
              <a
                href="tel:+36300900000"
                className="bg-gradient-to-r from-[#ec6608] to-[#ff9b06] px-4 py-2 mt-5 rounded-full text-white text-center text-sm font-semibold w-full md:w-[25%]"
              >
                +36 30 090 0000
              </a>
            </div>
            <img src={serviceImg1} alt="" className="block xl:hidden" />
          </div>
        </section>
        <section className="">
          <div className="flex pt-16 xl:pt-0 xl:items-start items-center flex-col px-6 xl:px-0 xl:flex-row xl:w-11/12 xl:mx-auto xl:gap-20">
            <div className="flex flex-col xl:gap-4 gap-2 xl:mt-16 xl:pl-20">
              <img
                src={serviceRealstateIcon}
                alt=""
                className="xl:w-max w-10"
              />
              <h1 className="text-[#006FB9] xl:text-2xl text-xl font-extrabold">
                Ingatlanközvetítők
              </h1>
              <p className="xl:text-md text-md text-[#949494] xl:w-10/12 text-justify">
                Ingatlan közvetítőink segítségedre lesznek, hogy megtaláld
                álmaid otthonát. Miért is érdemes közvetítőt fogadni? A válasz
                nagyon egyszerű, mert a megadott adatok, igények alapján akár
                azonnal több ingatlant is meg tud mutatni és segít minden
                kérdést megválaszolni, illetve a lakás előnyeit és hátrányait is
                feltárja előtted.{" "}
              </p>
              <a
                href="tel:+36300900000"
                className="bg-gradient-to-r from-[#ec6608] to-[#ff9b06] px-4 py-2 mt-5 rounded-full text-white text-center text-sm font-semibold w-full md:w-[25%]"
              >
                +36 30 090 0000
              </a>
            </div>
            <img src={serviceImg2} alt="" className="mt-5" />
          </div>
        </section>
        <section className="">
          <div className="flex pt-16 xl:pt-0 xl:items-start items-center flex-col px-6 xl:px-0 xl:flex-row xl:w-11/12 xl:mx-auto xl:gap-20">
            <img src={serviceImg3} alt="" className="hidden xl:block" />
            <div className="flex flex-col xl:gap-4 gap-2 xl:mt-16 mb-5 xl:mb-0">
              <img src={service3dIcon} alt="" className="xl:w-max w-10" />
              <h1 className="text-[#006FB9] xl:text-2xl text-xl font-extrabold">
                Matterport
              </h1>
              <p className="xl:text-md text-md text-[#949494] xl:w-10/12 text-justify">
                Fedezze fel az ingatlanok új dimenzióját! 3D-s virtuális
                túrákkal és pontos alaprajzokkal mutassuk be az ingatlanokat,
                mint még soha. Növelje eladásait és emelkedjen ki a versenyből a
                Matterport technológiával!{" "}
              </p>
              <a
                href="tel:+36209552867"
                className="bg-gradient-to-r from-[#ec6608] to-[#ff9b06] px-4 py-2 mt-5 rounded-full text-white text-center text-sm font-semibold w-full md:w-[25%]"
              >
                +36 20 955 2867
              </a>
            </div>
            <img src={serviceImg3} alt="" className="xl:hidden block" />
          </div>
        </section>
        <section className="">
          <div className="flex pt-16 xl:pt-0 xl:items-start items-center flex-col px-6 xl:px-0 xl:flex-row xl:w-11/12 xl:mx-auto xl:gap-20">
            <div className="flex flex-col xl:gap-4 gap-2 xl:mt-16 mb-5 xl:mb-0 xl:pl-20">
              <img src={serviceLawyerIcon} alt="" className="xl:w-max w-10" />
              <h1 className="text-[#006FB9] xl:text-2xl text-xl font-extrabold">
                Ügyvédek
              </h1>
              <p className="xl:text-md text-md text-[#949494] xl:w-10/12 text-justify">
                Az ingatlanokat érintő jogügyletek és lebonyolításuk kiemelt
                területét képezik az ügyvédi munkának. Várjuk mindazokat az
                ügyfeleket, akik megfizethető áron várnak professzionális és
                gyors ügyvédi segítséget az ingatlan adásvétel területén.
                Ügyvédjeink egész országos lefedettséggel bírnak, így
                kényelmesen intézheted jogi ügyeidet.{" "}
              </p>
              <a
                href="tel:+36300900000"
                className="bg-gradient-to-r from-[#ec6608] to-[#ff9b06] px-4 py-2 mt-5 rounded-full text-white text-center text-sm font-semibold w-full md:w-[25%]"
              >
                +36 30 090 0000
              </a>
            </div>
            <img src={serviceImg4} alt="" className="" />
          </div>
        </section>
        <section className="">
          <div className="flex pt-16 xl:pt-0 xl:items-start items-center flex-col px-6 xl:px-0 xl:flex-row xl:w-11/12 xl:mx-auto xl:gap-20">
            <img src={serviceImg5} alt="" className="hidden xl:block" />
            <div className="flex flex-col xl:gap-4 gap-2 xl:mt-16 mb-5 xl:mb-0">
              <img src={serviceEnergyIcon} alt="" className="xl:w-max w-10" />
              <h1 className="text-[#006FB9] xl:text-2xl text-xl font-extrabold">
                Energetika
              </h1>
              <p className="xl:text-md text-md text-[#949494] xl:w-10/12 text-justify">
                Az energetikai tanúsítvány egy magánokirat, mely az ingatlan
                energia fogyasztásáról ad bővebb tájékoztatást. A fogyasztás
                mértéke fogja meghatározni az ingatlan besorolását,
                kategóriáját. Továbbá tájékoztatást ad az ingatlan fűtés és
                meleg víz rendszeréről, az épület rétegrendjeiről. Valamint
                javaslatot tesz az ingatlan energetikai korszerűsítésére is.
                Eladások esetében érdemes ezt elvégezni, illetve az új
                tulajdonos számára biztosítani a tanúsítványt.{" "}
              </p>
              <a
                href="tel:+36300900000"
                className="bg-gradient-to-r from-[#ec6608] to-[#ff9b06] px-4 py-2 mt-5 rounded-full text-white text-center text-sm font-semibold w-full md:w-[25%]"
              >
                +36 30 090 0000
              </a>
            </div>
            <img src={serviceImg5} alt="" className="xl:hidden block" />
          </div>
        </section>
        <section className="pb-10">
          <div className="flex pt-16 xl:pt-0 xl:items-start items-center flex-col px-6 xl:px-0 xl:flex-row xl:w-11/12 xl:mx-auto xl:gap-20">
            <div className="flex flex-col xl:gap-4 gap-2 xl:mt-16 mb-5 xl:mb-0 xl:pl-20">
              <img src={serviceCleaningIcon} alt="" className="xl:w-max w-10" />
              <h1 className="text-[#006FB9] xl:text-2xl text-xl font-extrabold">
                Takarítás
              </h1>
              <p className="xl:text-md text-md text-[#949494] xl:w-10/12 text-justify">
                Add át tisztán ingatlanod, házad, lakásod, irodád! Segítünk
                megbízható takarítót találni az ország egész területén.
                Csapatunk értéknek tartja az ügyféllel való közös gondolkodást,
                hogy minél eredményesebb legyen az együttműködésünk. A közös
                gondolkodás alapja az első konzultáció, ahol átbeszéljük a
                részleteket és ennek megfelelően készül az árajánlat. Így
                nincsenek rejtett költségek és kellemetlen meglepetések.{" "}
              </p>
              <a
                href="tel:+36300900000"
                className="bg-gradient-to-r from-[#ec6608] to-[#ff9b06] px-4 py-2 mt-5 rounded-full text-white text-center text-sm font-semibold w-full md:w-[25%]"
              >
                +36 30 090 0000
              </a>
            </div>
            <img src={serviceImg6} alt="" className="" />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Services;
