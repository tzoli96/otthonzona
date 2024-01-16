import React from "react";
import heroBg from "../../pictures/contactus/contact-us-hero-img.png";
import instagramIcon from "../../pictures/contactus/contact-us-instagram-icon.svg";
import facebookIcon from "../../pictures/contactus/contact-us-facebook-icon.svg";
import happyFamilyImg from "../../pictures/contactus/contact-u-happy-family-with-dog-img.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactUsCard from "./Sub/ContactUsCard";
import ContactCard from "./Sub/ContactCard";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const facebookURL = "https://www.facebook.com/otthonzona";
  const instagramURL = "https://www.instagram.com/otthonzona/";

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
          <ContactUsCard />
        </div>
        <div className="bg-[#006FB9] px-5 py-10 lg:hidden">
          <h1 className="text-white text-3xl font-extrabold">Kapcsolat</h1>
          <p className="text-white font-semibold mt-4">
            Kérjük, lépj velünk kapcsolatba az alábbi elérhetőségeink egyikén,
            ahol ügyfélszolgálatunk készséggel áll a rendelkezésedre.
          </p>
        </div>
        <h1 className="text-[#006FB9] text-2xl lg:text-4xl font-extrabold text-center py-8 lg:py-16 lg:leading-normal">
          Elérhetőségeink
        </h1>
        <ContactCard />
        <div className="bg-[#006FB9] lg:pl-10 relative flex flex-col lg:flex-row items-center justify-between">
          <img
            src={happyFamilyImg}
            alt="Family Photo"
            className="lg:-mt-44 -mt-28 lg:hidden"
          />
          <p className=" text-white lg:text-[48px] text-2xl text-center lg:text-start leading-tight lg:w-4/12 font-extrabold py-10 lg:p-0">
            Kövess minket közösségi{" "}
            <span className="text-[#FF9B06]">felületeinken is!</span>
          </p>
          <div className="flex gap-5">
            <Link to={instagramURL} target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram Logo" />
            </Link>
            <Link to={facebookURL} target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook Logo" />
            </Link>
          </div>
          <img
            src={happyFamilyImg}
            alt="Family Photo"
            className="lg:-mt-44 hidden lg:block"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;

// #006FB9
