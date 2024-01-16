import React from "react";
import whiteLogo from "../icons/white-logo.svg";
import useIsMobile from "../utils/useIsMobile";
import { Link } from "react-router-dom";

function AboutFooter() {
  const isMobile = useIsMobile();
  return (
    <div className="w-full md:grid grid-cols-2 gap-6 overflow-hidden relative min-h-[538px] about-footer">
      <div className="about-footer-circle border-0 border-b-0">
        <img
          src={whiteLogo}
          className="h-32 w-32 mt-52 ml-24 md:ml-48 md:mt-72 md:w-48 md:h-48"
        />
      </div>
      <div className="absolute w-full bottom-0 h-full bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="mt-[360px] md:mt-[256px] ml-8 md:ml-[128px]">
          <p
            className={
              "font-bold text-sm md:text-3xl text-white " +
              (isMobile ? "" : "section-heading")
            }
          >
            <span className="text-blue">Mi segítünk,</span> hogy gyorsan, <br />
            és könnyedén adj el vagy <br />
            keress ingatlant
          </p>
          <div className="mt-4">
            <Link to="/post-ad">
              <button className="orange-button">Hirdetésfeladás</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFooter;
