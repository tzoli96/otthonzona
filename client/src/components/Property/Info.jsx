import React, { useContext, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import roomIcon from "../../icons/room.svg";
import arrows from "../../icons/two-head-arrow.svg";
import heart from "../../icons/heart.svg";
import orangeHeart from "../../icons/orange-heart.svg";
import fbShare from "../../icons/facebook-share.svg";
import messengerShare from "../../icons/messenger-share.svg";
import copyLinkShare from "../../icons/copy-share.svg";
import share from "../../icons/share.svg";
import { toast } from "react-hot-toast";
import { districtOptions, settlementOptions } from "../../res/options";
import thousandSeparator from "../../utils/thousandSeparator";
import { request } from "../../utils/request";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import {
  adType,
  btype,
  propertyType,
  // ... any other option imports you need
} from "../../res/options";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

function Info({ property }) {
  const user = useAuthUser()?.userData;

  const [isSaved, setIsSaved] = useState(
    user?.savedProperties?.map((p) => p + "").indexOf(property.id) > -1
  );

  const [showShareOptions, setShowShareOptions] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowShareOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShare = (option) => {
    const propertyUrl = `https://otthonzona.com/${property.id}`;
    const appId = "259498910212627";
    const redirectUri = encodeURIComponent(window.location.href);

    if (option === "facebook") {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        propertyUrl
      )}`;
      window.open(facebookUrl, "_blank");
    } else if (option === "messenger") {
      const messengerUrl = `https://www.facebook.com/dialog/send?app_id=${appId}&link=${encodeURIComponent(
        propertyUrl
      )}&redirect_uri=${redirectUri}&display=popup`;
      window.open(messengerUrl, "_blank");
    } else if (option === "copyLink") {
      navigator.clipboard.writeText(propertyUrl).then(
        () => {
          toast.success("Link másolva a vágólapra!");
        },
        (err) => {
          console.error("Másolás sikertelen ", err);
        }
      );
    } else if (option === "iosShare") {
      if (navigator.share) {
        navigator
          .share({
            title: "Nézd meg ezt az ingatlant",
            url: propertyUrl,
          })
          .then(() => {
            console.log("Köszönjük!");
          })
          .catch(console.error);
      } else {
        toast.error("A megosztás nem támogatott ebben a böngészőben");
      }
    }

    setShowShareOptions(false);
  };

  const handleShareButtonClick = () => {
    if (isMobile) {
      handleShare("iosShare");
    } else {
      setShowShareOptions((prev) => !prev);
    }
  };

  const renderShareButton = () => {
    return (
      <div className="share-wrapper">
        <span
          className="inline-flex gap-2 share-button"
          onClick={handleShareButtonClick}
        >
          <img src={share} alt="Share" />
          <span>Megosztás</span>
        </span>
      </div>
    );
  };

  const renderShareOptions = () => {
    return (
      <div className="share-wrapper">
        <div className="share-popup" ref={popupRef}>
          <button
            className="popup-close-button"
            onClick={() => setShowShareOptions(false)}
          >
            &times;
          </button>
          <button
            className="share-popup-button"
            onClick={() => handleShare("facebook")}
          >
            <img src={fbShare} alt="Facebook share" /> Megosztás Facebookon
          </button>
          <button
            className="share-popup-button"
            onClick={() => handleShare("messenger")}
          >
            <img src={messengerShare} alt="Messenger share" /> Küldés
            Messengerben
          </button>
          <button
            className="share-popup-button"
            onClick={() => handleShare("copyLink")}
          >
            <img src={copyLinkShare} alt="Copy link" /> Link másolása
          </button>
        </div>
      </div>
    );
  };

  const district = districtOptions.find(
    (option) => option.value === property.district
  );
  const settlement = settlementOptions.find(
    (option) => option.value === property.settlement
  );

  const isLoggedIn = true;

  const handleAddToFavorites = async () => {
    if (!isLoggedIn) {
      toast.error("Jelentkezz be, hogy ingatlanokat adhass a kedvencekhez.");
      return;
    }

    try {
      await request(`/api/user/save-property/${property.id}`, {
        method: "POST",
      });
      setIsSaved(true);
    } catch (error) {
      //console.error("Failed to add to favorites", error);
      toast.error("Sikertelen hozzáadás a kedvencekhez");
    }
  };

  const getLabel = (value, optionsArray) => {
    const option = optionsArray.find((option) => option.value === value);
    return option ? option.label : value;
  };

  const titleContent = [
    getLabel(property?.adType, adType),
    getLabel(property?.btype, btype),
    property?.propertyType === "lakas" || property?.propertyType === "telek"
      ? `${getLabel(property?.propertyType, propertyType)},`
      : null,
    settlement?.label,
    district?.label,
    property.street,
    property?.exactPosition && property?.houseNo ? property.houseNo : null,
  ]
    .filter((part) => part != null)
    .join(" ");

  const firstImageUrl =
    property?.photos && property?.photos.length > 0
      ? property?.photos[0]
      : "defaultImageUrl";

  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>{titleContent}</title>
        <meta property="og:title" content={titleContent} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={firstImageUrl} />
        <meta property="og:description" content={property?.description} />
        <meta property="fb:app_id" content="259498910212627" />
      </Helmet>

      <div className="rounded-2xl bg-white py-8 px-6 card-shadow">
        <p className="card-heading">
          {settlement?.label} {district?.label} {property.street}{" "}
          {property?.exactPosition &&
            property?.houseNo &&
            ` ${property.houseNo}`}
        </p>

        <p className="text-orange my-2 font-bold">
          {getLabel(property?.adType, adType)}{" "}
          {getLabel(property?.btype, btype)}
          {(property?.propertyType === "lakas" ||
            property?.propertyType === "telek") &&
            ` ${getLabel(property?.propertyType, propertyType)}`}
        </p>

        <div className="mt-6">
          {(property.rooms || property.halfRooms) && (
            <div className="border-b pb-1">
              <span className="inline-flex gap-3">
                <img src={roomIcon} />

                <span className="text-lightgrey text-md font-bold">Szoba</span>
              </span>

              <span className="float-right font-bold">
                {property.rooms}
                {property.halfRooms ? ` + ${property.halfRooms} fél` : ""}
              </span>
            </div>
          )}

          {property.area && (
            <div className="border-b mt-3 pb-1">
              <span className="inline-flex gap-3">
                <img src={arrows} />

                <span className="text-lightgrey text-md font-bold">
                  Alapterület
                </span>
              </span>

              <span className="float-right font-bold">
                {property.area}m<sup>2</sup>
              </span>
            </div>
          )}

          {property?.landArea && (
            <div className="border-b mt-3 pb-1">
              <span className="inline-flex gap-3">
                <img src={arrows} />
                <span className="text-lightgrey text-md font-bold">
                  Telekterület
                </span>
              </span>
              <span className="float-right font-bold">
                {property.landArea}m<sup>2</sup>
              </span>
            </div>
          )}
        </div>
        <div className="mt-4 text-2xl text-blue font-bold">
          {thousandSeparator(property.price)} Ft
        </div>
        <a href={`mailto:${property.agent?.email}`} className="block my-6">
          <button className="orange-button w-full" style={{ width: "100%" }}>
            Érdekel az ingatlan
          </button>
        </a>
        <div className="mt-2 grid grid-cols-2 text-lightgrey font-bold text-md">
          <div>
            <button
              className="inline-flex gap-2"
              onClick={handleAddToFavorites}
            >
              <img src={isSaved ? orangeHeart : heart} alt="Add to favorites" />
              <span>{isSaved ? "Mentve" : "Ingatlan mentése"}</span>
            </button>
          </div>
          <div>
            {renderShareButton()}
            {showShareOptions && renderShareOptions()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
