import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Elements/AppLayout";
import BasicDetails from "./BasicDetails";
import Location from "./Location";
import MoreDetails from "./MoreDetails";
import UploadImages from "./UploadImages";
import convertFormDataToJson from "../../utils/fd";
import { toast } from "react-hot-toast";
import isLoggedIn from "../../utils/isLoggedIn";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { validateForm } from "../../utils/validation/post-validation";
import { submitProperty } from "../../utils/request/propertyRequests";

const transformProperty = (property) => ({
  ...property,
  exactPosition: property.exactPosition === "true",
  photos: property.photos.split(","),
  rooms: parseInt(property.rooms || 0),
  halfRooms: parseInt(property.halfRooms || 0),
  area: parseInt(property.area || 0),
  landArea: parseInt(property.landArea || 0),
  price: parseInt(property.price),
});

const notify = (message, type = "error") => toast[type](message);

const PostAd = ({ prefill, isDraft }) => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitter = e.nativeEvent.submitter;
    const showDraftButton =
      submitter instanceof HTMLButtonElement &&
      submitter.id === "showDraftButton";
    const draftSaveButton =
      submitter instanceof HTMLButtonElement && submitter.id === "draft";

    const formData = convertFormDataToJson(e.target);
    const transformedData = transformProperty(formData);

    const validationError = validateForm(transformedData);
    if (!isDraft && !showDraftButton && validationError)
      return notify(validationError);

    setIsLoading(true);

    let endpoint = prefill ? `/api/property/${prefill.id}` : "/api/property";
    if (showDraftButton) endpoint = "/api/draft_property";
    if (isDraft && draftSaveButton)
      endpoint = `/api/draft_property/${prefill.id}`;

    let method = showDraftButton ? "POST" : prefill ? "PUT" : "POST";
    if (isDraft && !draftSaveButton) {
      endpoint = "/api/property";
      method = "POST";
      transformedData.draft_id = prefill.id;
    }

    try {
      const propertyId = await submitProperty(
        endpoint,
        transformedData,
        method
      );
      const callbackUrl =
        showDraftButton || isDraft ? "/drafts" : `/${propertyId}`;

      setTimeout(() => navigate(callbackUrl), 300);

      notify(
        prefill ? "A tulajdon sikeresen szerkesztve" : "Feladott hirdetés",
        "success"
      );
    } catch (error) {
      //console.error("Hiba a hirdetés beküldése során:", error);
      notify("Hiba történt a hirdetés beküldése közben");
    } finally {
      setIsLoading(false);
    }
  };

  if (!loggedIn) {
    return (
      <div className="w-full">
        <Navbar />
        <div className="h-96 flex justify-center items-center flex-col gap-4">
          <span className="font-medium text-gray-600 text-lg">
            Hirdetés feladásához jelentkezzen be, vagy hozzon létre fiókot
          </span>
          <span className="flex gap-3">
            <Link to="/login">
              <button className="blue-button">Bejelentkezés</button>
            </Link>
            <Link to="/register">
              <button className="orange-button">Regisztráció</button>
            </Link>
          </span>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <Layout selected={1}>
      <div className="p-8 w-full">
        <p className="font-bold text-xl">
          {isDraft ? "Piszkozat szerkesztés" : "Hirdetés feladás"}
        </p>

        <form onSubmit={handleSubmit}>
          <BasicDetails prefill={prefill} />
          <Location prefill={prefill} />
          <MoreDetails prefill={prefill} />
          <UploadImages prefill={prefill} />

          <div className="flex flex-col items-end lg:flex-row lg:justify-end">
            {!prefill && (
              <span className="mb-8 order-2 lg:order-1 lg:mr-4">
                <button
                  className="blue-button !w-auto px-[40px]"
                  id="showDraftButton"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Mentés piszkozatként..."
                    : "Mentés piszkozatként"}
                </button>
              </span>
            )}

            {isDraft && (
              <span className="mb-8 order-2 lg:order-1 lg:mr-4">
                <button className="blue-button" id="draft" disabled={isLoading}>
                  {isLoading ? "Piszkozat mentés..." : "Piszkozat mentés"}
                </button>
              </span>
            )}

            <span className="float-right mb-8 order-1 lg:order-2">
              <button className="blue-button" id="upload" disabled={isLoading}>
                {isLoading ? "Feltöltés..." : "Feltöltés"}
              </button>
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostAd;
