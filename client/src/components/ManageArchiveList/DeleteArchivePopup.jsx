import React, { useState } from "react";
import { BasePopup } from "../Elements/Base/BasePopup";
import { DeleteLoader } from "../Loader";
import { finalPropertyDelete } from "../../utils/request/propertyRequests";

export function DeleteArchivePopup({ setIsVisible, property, setProperties,properties}) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const response = await finalPropertyDelete(property.id);
      if (response.isSuccess) {
        setProperties(properties.filter((p) => p.id !== property.id));
      }
    } catch (err) {
    } finally {
      setDeleting(false);
      setIsVisible(false);
    }
    setDeleting(true);
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
          {deleting && <DeleteLoader />}
        </div>
      </div>
    </BasePopup>
  );
}
