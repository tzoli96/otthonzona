import { Routes, Route,Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./scss/app.scss";
// import "./App.css";
import AboutFooter from "./components/AboutFooter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import PopularProperties from "./components/PopularProperties";
import WhyUs from "./components/WhyUs";
import WhyUs2 from "./components/WhyUs2";
import Property from "./pages/Property";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import ManageArchiveList from "./components/ManageArchiveList";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import AgencyRegister from "./components/Auth/Agency";
import EmailConfirmation from "./components/Auth/EmailConfirmation";
import AboutUs from "./components/AboutUs";
import NewsPage from "./components/NewsPage";
import FAQs from "./components/FAQs";
import ResetPassword from "./components/Auth/ResetPassword";
import PostAd from "./components/PostAd";
import Drafts from "./components/Drafts";
import SavedAds from "./components/SavedAds";
import Profile from "./components/Profile";
import Agency from "./components/Agency";
import ConfirmInvite from "./components/Agency/InvitationConfirm";
import { createContext, useEffect, useState } from "react";
import ManageAds from "./components/ManageAds";
import EditAd from "./pages/EditAd";
import CreditPurchaseHistory from "./components/CreditPurchaseHistory";
import BiddingDashboard from "./components/BiddingDashboard";
import Maintainence from "./components/Maintainence";
import config from "./config";
import useIsMobile from "./utils/useIsMobile";
import Services from "./components/Services";
import HomeServices from "./components/HomeServices";
import GetSocialLogin from "./components/GetSocialLogin";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import CookieConsent from "./components/Elements/CookieConsent";

import FalusiCsok from "./components/NewsPage/FalusiCsok";
import MekkoratVehetunk from "./components/NewsPage/MekkoratVehetunk";
import IntelligensSzellozok from "./components/NewsPage/IntelligensSzellozok";
import EditDraft from "./components/Drafts/EditDraft";
import AgencyMemberProfile from "./components/AgencyMemberProfile";
import Member from "./pages/Member";
import { Dashboard } from "./components/Admin/index";
import { AdminLayout } from "./components/Admin/AdminLayout";
import { UserAcitvityIndex } from "./components/Admin/UserActivity/UserAcitvityIndex";
import { PermissionsIndex } from "./components/Admin/Permissions/PermissionsIndex";
import { UserCreditIndex } from "./components/Admin/UserCredit/UserCreditIndex";
import { Agencies } from "./components/Admin/Agencies/Agencies";

function generateSessionId(length = 16) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function setSessionIdCookie() {
  if (
    !document.cookie.split("; ").find((row) => row.startsWith("sessionId="))
  ) {
    const sessionId = generateSessionId();
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `sessionId=${sessionId}; expires=${expiryDate.toUTCString()}; path=/`;
  }
}

export const AppContext = createContext();

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Helmet>
        <title>Otthon Zóna</title>
        <meta property="og:title" content="Otthon Zóna" />
      </Helmet>

      <Navbar />
      <Hero />
      <PopularProperties />
      <HomeServices />
      <WhyUs />
      <WhyUs2 />
      <News />
      <AboutFooter />
      <CookieConsent />
      <Footer />
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  return (
    <AppContext.Provider value={{ ...data, setData }}>
      <Routes>
        <Route
          exact
          path="/"
          element={config.mode === "MAINTAINENCE" ? <Maintainence /> : <Home />}
        />
          <Route path="/search" element={<Search />} />
              <Route path="/admin" element={<AdminLayout />}>
                  <Route path="/admin/" element={<Dashboard />} />
                  <Route path="/admin/user-activity" element={<UserAcitvityIndex />} />
                  <Route path="/admin/permissions" element={<PermissionsIndex />} />
                  <Route path="/admin/credit-management" element={<UserCreditIndex />} />
                  <Route path="/admin/agencies" element={<Agencies />} />
              </Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/agency-register" element={<AgencyRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/confirm-email/:token" element={<EmailConfirmation />} />
        <Route path="/confirm-invite/:token" element={<ConfirmInvite />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/post-ad" element={<PostAd />} />
        <Route path="/drafts" element={<Drafts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage-ads" element={<ManageAds key="ads" />} />
        <Route path="/edit-property/:id" element={<EditAd />} />
        <Route
          path="/credit-purchase-history"
          element={<CreditPurchaseHistory />}
        />
        <Route path="/edit-draft/:id" element={<EditDraft />} />
        <Route path="/bidding" element={<BiddingDashboard />} />
        <Route path="/saved-properties" element={<SavedAds />} />
        <Route path="/services" element={<Services />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/agency-member-profile" element={<AgencyMemberProfile />} />
        <Route path="/agent/:memberId" element={<Member />} />
        <Route path="/get-social-login" element={<GetSocialLogin />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/falusi-csok-2024" element={<FalusiCsok />} />
        <Route
          path="/mekkora-lakast-vehetunk-35-milliobol"
          element={<MekkoratVehetunk />}
        />
        <Route
          path="/az-intelligens-szellozorendszerek-elonyei"
          element={<IntelligensSzellozok />}
        />
        <Route path="/:id" element={<Property />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/manage-archives"
          element={<ManageArchiveList isArchive={true} key="archives" />}
        />
      </Routes>
      <Toaster />
    </AppContext.Provider>
  );
}

export default App;
