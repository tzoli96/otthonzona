import React from "react";
import whiteLogo from "../icons/white-logo.svg";
import insta from "../icons/insta.svg";
import yt from "../icons/yt.svg";
import fb from "../icons/fb.svg";
import { useIsSmallerScreen } from "../utils/useIsMobile";
import barion from "../pictures/barion.png";

const social = [
  { icon: fb, link: "https://www.facebook.com/otthonzona" },
  { icon: insta, link: "https://www.instagram.com/otthonzona/" },
];

const stripLinks = [
  "Adatkezelési tájékoztató",
  "ÁSZF",
  "Cookie-k használata",
  "Nyereményjáték szabályzat",
];

function Footer({}) {
  const isTablet = useIsSmallerScreen(1023);

  return (
    <>
      <div className="lg:hidden w-full h-44 flex justify-center items-center bg-blue">
        <img src={whiteLogo} className="h-40 w-40" />
      </div>
      <div className="footer-section py-8 footer-links-container text-white overflow-hidden">
        <div>
          <p className="font-bold my-4">Kapcsolat</p>
          <p className="my-1">+36 30 090 0000</p>
          <p className="my-1">info@otthonzona.com</p>
          <p className="my-1">munkanapokon 10:00-17:00-ig</p>
          <p className="my-1">Millennium Projekt Management Kft.</p>
        </div>
        {isTablet && <div />}
        <div>
          <p className="font-bold my-4">Szolgáltatások</p>
          <p className="my-1">
            <a href="/services">Költöztetés</a>
          </p>
          <p className="my-1">
            <a href="/services">Ingatlanközvetítők</a>
          </p>
          <p className="my-1">
            <a href="/services">Hitel biztosítás</a>
          </p>
          <p className="my-1">
            <a href="/services">Ügyvédek</a>
          </p>
        </div>
        <div>
          <p className="font-bold my-4">Eladnék</p>
          <p className="my-1">
            <a href="/register">Regisztráció</a>
          </p>
          <p className="my-1">
            <a href="/login">Belépés</a>
          </p>
        </div>
        <div>
          <p className="font-bold my-4">Rólunk</p>
          {/*<p className="my-1">
            <a href="/faqs">GYIK</a>
          </p>*/}
          <p className="my-1">
            <a href="/about-us">Magunkról</a>
          </p>
          <p className="my-1">
            <a href="/news">Hírek, elemzések</a>
          </p>
        </div>
        <div className="-mt-4">
          {!isTablet && <img src={whiteLogo} className="h-40 w-40" />}
          <div className="flex gap-2 relative h-full">
            <div className="flex gap-2 absolute bottom-0 md:top-0 md:bottom-auto">
              {social.map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={`Social Media ${index}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section footer-orange-strip grid grid-cols-2 md:flex md:justify-center items-center gap-6 py-6 overflow-hidden">
        {stripLinks.map((s, index) =>
          index === 0 ? (
            <a
              key={index}
              href="/adatkezelesi_tajekoztato.pdf"
              target="_blank"
              className="text-white"
            >
              {s}
            </a>
          ) : index === 1 ? (
            <a
              key={index}
              href="/otthonzona_aszf.pdf"
              target="_blank"
              className="text-white"
            >
              {s}
            </a>
          ) : index === 2 ? (
            <a
              key={index}
              href="/adatvedelmi_cookie.pdf"
              target="_blank"
              className="text-white"
            >
              {s}
            </a>
          ) : index === 3 ? (
            <a
              key={index}
              href="/otthonzona_nyeremenyjatek.pdf"
              target="_blank"
              className="text-white"
            >
              {s}
            </a>
          ) : (
            <span key={index} className="text-white">
              {s}
            </span>
          )
        )}
      </div>
    </>
  );
}

export default Footer;
