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
import draftIcon from "../../pictures/app/draft.svg";
import myAgencyIcon from "../../pictures/app/my-agency.svg";
import previousPurchaseIcon from "../../pictures/app/previous-purchase.svg";

import { Link } from "react-router-dom";
import { profilePhotoPlaceholder } from "../Profile";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import PermissionAuth from "../PermissionAuth";

function Layout({ children, selected, }) {
    const user = useAuthUser()?.userData;

    const adminMenus = useMemo(
        () => [
            {
                label: "Admin",
                href: "/admin",
                icon: manageAdsIcon,
            },
        ],
        []
    );
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
      { label: "Piszkozatok", href: "/drafts", icon: draftIcon },
      //{ label: "Értékelések", href: "/post-ad", icon: starIcon },
      //{ label: "Iroda létrehozása", href: "/agency", icon: starIcon },
      //{ label: "Megkeresések", href: "/post-ad", icon: messageIcon },
      {
        label: "Korábbi vásárlásaim",
        href: "/credit-purchase-history",
        icon: previousPurchaseIcon,
      },
      { label: "Ingatlan irodám", href: "/agency", icon: myAgencyIcon },
      {
        label: "Archivált hirdetések",
        href: "/manage-archives",
        icon: manageAdsIcon,
      },
      {
        label: "Ingatlanos profilom",
        href: "/agency-member-profile",
        icon: profileIcon,
        onlyAgencyMember: true,
      }, // show menu element to agency members only
    ],
    []
  );

  return (
    <div className="w-full">
      <Navbar />
      <div className="grid grid-cols-4">
          <div className="bg-blue min-h-screen max-xl:p-4 p-8 hidden lg:block">
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
              <PermissionAuth role="admin">
                  <div className="border-t my-4">
                      {adminMenus.map((m, i) => (
                          <Link to={m.href}>
                              <button
                                  className={
                                      "my-2 p-2 px-4 pt-2.5 grid items-center gap-4 rounded-full !text-left !w-full !bg-opacity-0 lg:max-xl:!text-[15px] transparent-button"
                                  }
                                  style={{
                                      gridTemplateColumns: "30px 1fr",
                                  }}
                              >
                                  <img src={m.icon} className="lg:max-xl:w-[20px] lg:max-xl:h-[20px] mt-0"/>

                                  <span className="mt-0.5 align-top">{m.label}</span>
                              </button>
                          </Link>
                      ))}
                  </div>
              </PermissionAuth>
              <div className="border-t my-4">
                  {menus.map((m, i) => (
                      <Link to={m.href} className={
                        m.onlyAgencyMember && !user?.isAgent
                            ? "hidden"
                            : ""
                      }>
                          <button
                              className={
                                  "my-2 p-2 px-4 pt-2.5 grid items-center gap-4 rounded-full !text-left !w-full !bg-opacity-0 lg:max-xl:!text-[15px] " +
                                  (i === selected ? "orange-button" : "transparent-button")
                              }
                              style={{
                                  gridTemplateColumns: "30px 1fr",
                              }}
                          >
                              <img src={m.icon} className="lg:max-xl:w-[20px] lg:max-xl:h-[20px] mt-0"/>

                              <span className="mt-0.5 align-top">{m.label}</span>
                          </button>
                      </Link>
                  ))}
              </div>
          </div>
          <div className="col-span-4 lg:col-span-3">{children}</div>
      </div>
        <Footer/>
    </div>
  );
}

export default Layout;
