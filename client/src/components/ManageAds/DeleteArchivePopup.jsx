import React, { useState } from "react";
import { BasePopup } from "../Elements/Base/BasePopup";
import { Loader } from "./Loader.jsx";

export function DeleteArchivePopup({ setIsVisible, property, setProperties }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    // try {
    //     setDeleting(true);
    //     const response = await request(`/api/property/${property.id}`, {
    //       method: "DELETE",
    //     });
    //     if (response?.data?.isArchived) {
    //       setProperties(properties.filter((p) => p.id !== property.id));
    //     }
    // } catch (err) {
    // } finally {
    //     setDeleting(false);
    // }
    setDeleting(true);
    console.log(property);

    setTimeout(function () {
      console.log("deleted");
      setIsVisible(false);
      setDeleting(false);
    }, 2000);
  };
  const buttonClass = "-button mb-4";

  return (
    <BasePopup title="Hirdetés törlése" setIsvisible={setIsVisible}>
      <div className="delete-ad-popup archive min-h-[300px] justify-center flex items-center">
        <div>
          <h2 className="text-center mb-8 text-xl">
            Biztos véglegesen törli ezt a hirdetést?
          </h2>
          <div className="flex justify-center gap-4">
            <button
              className={"delete-button transparent" + buttonClass}
              onClick={handleDelete}
            >
              Igen
            </button>
            <button
              className={"blue" + buttonClass}
              onClick={() => setIsVisible(false)}
            >
              Mégse
            </button>
          </div>
          {deleting && <Loader />}
        </div>
      </div>
    </BasePopup>
  );
}
