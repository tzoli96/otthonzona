import React, { useContext, useMemo } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import personIcon from "../../pictures/app/person.png";
import manageAdsIcon from "../../pictures/app/manage-ads.png";
import createAdIcon from "../../pictures/app/create-ad.svg";
import bankIcon from "../../pictures/app/bank.svg";
import starIcon from "../../pictures/app/star.svg";
import profileIcon from "../../pictures/app/profile.svg";
import messageIcon from "../../pictures/app/message.svg";
import notificationIcon from "../../pictures/app/notification.svg";
import eyeIcon from "../../pictures/app/eye.svg";
import heartIcon from "../../pictures/app/heart.png";

import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { profilePhotoPlaceholder } from "../Profile";

function Layout({ children, selected }) {
  const { user } = useContext(AppContext);

  const menus = useMemo(
    () => [
      {
        label: "Hirdetések kezelése",
        href: "/manage-ads",
        icon: manageAdsIcon,
      },
      { label: "Hirdetésfeladás", href: "/post-ad", icon: createAdIcon },
      { label: "Hirdetéskiemelés", href: "/bidding", icon: bankIcon },
      {
        label: "Mentett hirdetéseim",
        href: "/saved-properties",
        icon: eyeIcon,
      },
      //{ label: "Megtekintett ingatlanok", href: "/post-ad", icon: heartIcon },
      //{ label: "Értesítések", href: "/post-ad", icon: notificationIcon },
      { label: "Profil adatok", href: "/profile", icon: profileIcon },
      { label: "Piszkozatok", href: "/drafts", icon: starIcon },
      //{ label: "Értékelések", href: "/post-ad", icon: starIcon },
      //{ label: "Iroda létrehozása", href: "/agency", icon: starIcon },
      //{ label: "Megkeresések", href: "/post-ad", icon: messageIcon },
      {
        label: "Korábbi vásárlásaim",
        href: "/credit-purchase-history",
        icon: bankIcon,
      },
    ],
    []
  );

  return (
    <div className="w-full">
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="bg-blue min-h-screen p-8 hidden md:block">
          <div className="flex w-48 h-48 rounded-full overflow-hidden rounded-image-container">
            <img
              src={user?.photo || profilePhotoPlaceholder}
              className="min-w-full min-h-full"
            />
          </div>
          <div>
            <p className="text-white font-medium text-2xl mt-4">
              {user?.firstName} {user?.lastName}
            </p>
          </div>
          <div className="border-t my-4">
            {menus.map((m, i) => (
              <Link to={m.href}>
                <button
                  className={
                    "my-2 p-2 px-4 pt-2.5 grid gap-4 rounded-full !text-left !w-full !bg-opacity-0 " +
                    (i === selected ? "orange-button" : "transparent-button")
                  }
                  style={{
                    gridTemplateColumns: "30px 1fr",
                  }}
                >
                  <img src={m.icon} className="mt-0" />
                  <span className="mt-0.5 align-top">{m.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
