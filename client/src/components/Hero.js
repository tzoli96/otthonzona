import React, { useState } from "react";
import heroBg from "../pictures/hero-bg.png";
import heroLogo from "../pictures/logo-hero.png";
import arrowIcon from "../icons/Arrow.png";
import buildingOfficeIcon from "../icons/building-office-20-solid.png";
import ExtendedSearch from "./Elements/ExtendedSearch";
import SearchBar from "./Elements/SearchBar";
import { useNavigate } from "react-router-dom";
import {useIsSmallerScreen} from "../utils/useIsMobile";

const HeroSchedule1 = () => {
  const [showExtended, setShowExtended] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl min-w-[1000px] w-3/4 block lg:grid lg:grid-cols-5 gap-8 p-4 z-40 absolute"
      style={{ zIndex: 999 }}
    >
      <div className="lg:flex flex-col gap-2">
        <h3 className="font-bold">Típus</h3>
        <div className="flex p-1 py-1.5 rounded-2xl bg-[#006FB9]">
          <img src={buildingOfficeIcon} alt="icon" className="mx-1 h-4 mt-1" />
          <h5 className="text-white text-md font-bold">Lakás</h5>
          <img src={arrowIcon} alt="arrow" className="mx-3 h-1.5 mt-2.5" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Hol keresel?</h3>
        <input
          type="text"
          placeholder="Város, kerület, városrész"
          className="bg-[#efefef] py-2 px-4 rounded-full text-sm font-bold"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Alapterület</h3>
        <input
          type="text"
          placeholder="m2"
          className="bg-[#efefef] py-2 px-4 rounded-full text-sm font-bold"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Ár</h3>
        <input
          type="text"
          placeholder="millió Ft"
          className="bg-[#efefef] py-2 px-4 rounded-full text-sm font-bold"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <a href="/search">
          <button className="orange-button">Keresés</button>
        </a>
        <p
          className="text-[#EC6608] text-sm ml-1.5 cursor-pointer"
          onClick={() => setShowExtended(!showExtended)}
        >
          Részletes keresés
        </p>
      </div>
      {showExtended && <ExtendedSearch />}
    </div>
  );
};

const HeroSchedule = () => {
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate("/search" + window.location.search);
  };

  return <SearchBar onChangeFilters={() => ""} onSubmit={handleOnSubmit} />;
};

const Hero = () => {
  const isSmallerScreen = useIsSmallerScreen(1023);

  return (
    <>
    <div className="lg:hidden relative">
      <img
        src={heroBg}
        className="w-full h-auto"
      />
      <img src={heroLogo} alt="Logo" className="absolute bottom-4 right-6 h-1/2" />
    </div>
    <section
        style={isSmallerScreen ? { backgroundColor: "#34384A" } : { backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      <img src={heroLogo} alt="Logo" className="absolute bottom-4 right-6 hidden lg:block" />

      <div className="w-10/12 mx-auto py-6 lg:py-40">
        <div className="flex flex-col gap-6">
          <h1 className="hidden lg:block text-[2.5rem] font-bold text-white w-full max-w-[400px]">
            testTaláld meg nálunk <span className="text-[#006FB9]">álmaid</span>{" "}
            otthonát
          </h1>

          {false && (
            <div className="flex gap-2">
              <button className="text-white orange-gradient px-6 py-1 rounded-lg">
                Eladó
              </button>
              <button className="bg-white px-6 py-1 rounded-lg">Kiadó</button>
            </div>
          )}

          <HeroSchedule />
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
