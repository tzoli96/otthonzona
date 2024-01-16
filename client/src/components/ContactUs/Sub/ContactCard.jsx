import React from "react";
import callIcon from "../../../pictures/contactus/contact-us-call-icon.svg";
import mailIcon from "../../../pictures/contactus/contact-us-mail-icon.svg";

const ContactCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pb-10 lg:pb-20">
      <div className="bg-white shadow-xl border border-gray-300 w-[325px] hover:bg-gray-50 cursor-pointer shadow-gray-300 p-10 rounded-3xl flex flex-col items-center gap-2">
        <img src={callIcon} alt="Call Icon" />
        <a href="tel:+36300900000" className="text-[#006FB9] font-extrabold">
          +36 30 090 0000
        </a>
      </div>
      <div className="bg-white shadow-xl border border-gray-300 w-[325px] hover:bg-gray-100 cursor-pointer shadow-gray-300 p-10 rounded-3xl flex flex-col items-center gap-2">
        <a href="mailto:info@otthonzona.com">
          <img src={mailIcon} alt="Mail Icon" />
        </a>
        <a
          href="mailto:info@otthonzona.com"
          className="text-[#006FB9] font-extrabold"
        >
          info@otthonzona.com
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
