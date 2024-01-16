import React, { useState } from "react";
import heroBg from "../../pictures/hero-bg.png";
import heroLogo from "../../pictures/logo-hero.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Elements/SearchBar";
import useIsMobile from "../../utils/useIsMobile";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomeServiceCard from "./Sub/HomeServiceCard";

const HomeServicesSchedule = () => {
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate("/search" + window.location.search);
  };

  return <SearchBar onChangeFilters={() => ""} onSubmit={handleOnSubmit} />;
};

const HomeServices = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <p className="section-heading w-auto md:w-10/12 mx-auto services-title">
        Szolgáltatásaink
      </p>
      <div className="mt-20 mb-10">
        <section className="relative">
          <HomeServiceCard />
        </section>
      </div>
    </>
  );
};

export default HomeServices;
