import React, { useContext, useEffect, useState, useMemo } from "react";
import logo from "../pictures/logo.png";
import Cookies from "js-cookie";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../App";
import { profilePhotoPlaceholder } from "./Profile";
import dropdownIcon from "../pictures/app/dropdown.svg";
import menuIcon from "../pictures/app/menu.svg";
import manageAdsIcon from "../pictures/app/manage-ads.png";
import createAdIcon from "../pictures/app/create-ad.svg";
import bankIcon from "../pictures/app/bank.svg";
import profileIcon from "../pictures/app/profile.svg";
import messageIcon from "../pictures/app/message.svg";
import notificationIcon from "../pictures/app/notification.svg";
import eyeIcon from "../pictures/app/eye.svg";
import heartIcon from "../pictures/app/heart.png";
import { useIsSmallerScreen } from "../utils/useIsMobile";
import draftIcon from "../pictures/app/draft.svg";
import myAgencyIcon from "../pictures/app/my-agency.svg";
import previousPurchaseIcon from "../pictures/app/previous-purchase.svg";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import PermissionAuth from "./PermissionAuth";

function MobileLinks({ hide, isActive }) {
  return (
    <div className="bg-[rgb(53,56,73)] h-screen w-screen fixed top-0 left-0 z-40 p-6">
      <div className="h-16">
        <span className="float-right text-2xl p-6 text-white" onClick={hide}>
          ✕
        </span>
      </div>
      <div>
        <ul className="text-white mx-2 text-3xl font-bold">
          <li className={isActive("/") ? "text-[#EC6608] mx-2 my-6" : ""}>
            <Link to="/">Főoldal</Link>
          </li>
          <li
            className={`mx-2 my-6 ${
              isActive("/about-us") ? "text-[#EC6608]" : ""
            }`}
          >
            <Link to="/about-us">Rólunk</Link>
          </li>
          <li
            className={`mx-2 my-6 ${isActive("/news") ? "text-[#EC6608]" : ""}`}
          >
            <Link to="/news">Hírek</Link>
          </li>
          <li
            className={`mx-2 my-6 ${
              isActive("/contact-us") ? "text-[#EC6608]" : ""
            }`}
          >
            <Link to="/contact-us">Kapcsolat</Link>
          </li>
          <li
            className={`mx-2 my-6 ${
              isActive("/services") ? "text-[#EC6608]" : ""
            }`}
          >
            <Link to="/services">Szolgáltatások</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NavbarProfile({ setShow, show, user, logout }) {
  const isSmallerScreen = useIsSmallerScreen(1023);
  const isLoggedIn = useIsAuthenticated();

  const navigation = useNavigate();

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
    <>
      <div
        className="flex gap-2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (isLoggedIn()) {
            setShow(!show);
          } else {
            navigation("/login");
          }
        }}
      >
        <div>
          <div className="flex gap-2 mt-1">
            <div className="flex h-10 w-10">
              <img
                className="rounded-full w-full"
                src={user?.photo || profilePhotoPlaceholder}
              />
            </div>
            <div className="hidden lg:flex justify-center items-center text-blue select-none">
              {user?.lastName}
            </div>
            <div>
              <img
                src={dropdownIcon}
                className={
                  "mt-3 h-4 w-4 hidden lg:flex justify-center items-center " +
                  (show ? "" : "rotate-180")
                }
              />
            </div>
          </div>
          <div
            style={
              isSmallerScreen
                ? { zIndex: 999, background: "#006fb9" }
                : { zIndex: 999 }
            }
            className={
              `fixed top-0 left-0 w-full h-full lg:w-auto lg:h-auto lg:top-auto lg:left-auto text-white lg:text-black lg:bg-white lg:w-36 shadow mt-0 lg:mt-2 lg:rounded-lg overflow-hidden z-40 ` +
              (show ? "" : "hidden")
            }
          >
            <div className="h-16 lg:hidden">
              <span
                className="float-right text-2xl p-6"
                onClick={() => setShow(false)}
              >
                ✕
              </span>
            </div>
            <Link to="/bidding">
              <div className="w-full p-2 pl-6 active:bg-orange-600 text-left hover:text-black">
                {user?.credit} kredit
              </div>
            </Link>
            <Link to="/manage-ads">
              <button className="w-full p-2 pl-6 active:bg-orange-600 text-left hover:text-black">
                Ingatlanjaim
              </button>
            </Link>
            <Link to="/profile">
              <button className="w-full p-2 pl-6 active:bg-orange-600 text-left hover:text-black">
                Profil Adatok
              </button>
            </Link>
            <button
              className="w-full p-2 pl-6 active:bg-orange-600 text-left hover:text-black"
              onClick={logout}
            >
              Kijelentkezés
            </button>
            <div className="lg:hidden">
              {menus.map((profileText, profileIndex) => (
                <Link
                  className={
                    profileText.onlyAgencyMember && !user?.isAgent
                      ? "hidden"
                      : ""
                  }
                  to={profileText.href}
                >
                  <button className="flex items-center justify-start w-full active:bg-orange-600 gap-3 self-start p-2 pl-5 text-left hover:text-black">
                    <img src={profileText.icon} alt="" className="w-6" />
                    {profileText.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link to="/post-ad" className="hidden lg:flex">
          <button className="orange-button">Hirdetésfeladás</button>
        </Link>
      </div>
    </>
  );
}

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const signOut = useSignOut();
  const navigate = useNavigate();
  const user = useAuthUser()?.userData;
  const isLoggedIn = useIsAuthenticated();
  const logout = () => {
    signOut();
    navigate("/");
    toast.success("Kijelentkeztél");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between w-full lg:w-10/12 p-6 mx-auto items-center gap-10 relative z-35 bg-[rgb(247,247,247)] overflow-hidden">
      <div className="lg:hidden">
        <NavbarProfile
          user={user}
          show={show}
          setShow={setShow}
          logout={logout}
          isLoggedIn={isLoggedIn()}
        />
      </div>
      <div className="w-[120px] xl:max-2xl:max-w-[150px] lg:w-[35%] lg:hidden xl:block">
        <a href="/">
          <img src={logo} alt="logo" className="h-14" />
        </a>
      </div>

      <div className="hidden lg:flex justify-between w-[80%] gap-6 text-lightgrey font-bold lg:max-xl:w-full">
        <ul className="flex items-center gap-6">
          <li className={isActive("/") ? "text-[#EC6608]" : ""}>
            <Link to="/">Főoldal</Link>
          </li>
          <li
            className={`mx-2 ${isActive("/about-us") ? "text-[#EC6608]" : ""}`}
          >
            <Link to="/about-us">Rólunk</Link>
          </li>
          <li
            className={`mx-2 ${isActive("/services") ? "text-[#EC6608]" : ""}`}
          >
            <Link to="/services">Szolgáltatások</Link>
          </li>
          <li className={`mx-2 ${isActive("/news") ? "text-[#EC6608]" : ""}`}>
            <Link to="/news">Hírek</Link>
          </li>
          <li
            className={`mx-2 ${
              isActive("/contact-us") ? "text-[#EC6608]" : ""
            }`}
          >
            <Link to="/contact-us">Kapcsolat</Link>
          </li>
        </ul>
        {isLoggedIn() ? (
          <NavbarProfile
            show={show}
            setShow={setShow}
            user={user}
            logout={logout}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <div className="flex gap-6">
            <Link to="/login" className="blue-button">
              Bejelentkezés
            </Link>
            <Link to="/post-ad">
              <button className="orange-button">Hirdetésfeladás</button>
            </Link>
          </div>
        )}
      </div>

      <div className="flex lg:hidden" onClick={() => setShowMenu(true)}>
        <img src={menuIcon} className="h-6 w-6" />
      </div>
      {showMenu && (
        <MobileLinks isActive={isActive} hide={() => setShowMenu(false)} />
      )}
    </nav>
  );
};

export default Navbar;
