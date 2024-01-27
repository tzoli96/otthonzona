import { BasePopup } from "../Elements/Base/BasePopup";
import React, { useState } from "react";
import { activateArchive } from "../../utils/request/archiveRequest";
import { ActivatingLoader } from "./ActivatingLoader";

export function ActivateArchivePopup({
  visible,
  setVisible,
  property,
  setProperty,
  setProperties,
}) {
  const [activating, setActivating] = useState(false);

  const activate = async () => {
    console.log("activating");

    try {
      setActivating(true);
      const response = await activateArchive(property.id);
      if (response.isSuccess) {
        setProperties(properties.filter((p) => p.id !== property.id));
      }
    } catch (err) {
    } finally {
      setActivating(false);
      setVisible(false);
    }
  };

  return (
    <div className="activate-archive-popup">
      <BasePopup setIsvisible={setVisible}>
        <div className="delete-ad-popup archive min-h-[300px] justify-center flex items-center">
          <div>
            <h2 className="text-center mb-8 text-xl">Aktiválás?</h2>
            <div className="flex justify-center gap-4 choice">
              <button className={"orange-button mb-4"} onClick={activate}>
                Igen
              </button>
              <button
                className={"blue-button mb-4"}
                onClick={() => setVisible(false)}
              >
                Mégse
              </button>
            </div>
            {activating && <ActivatingLoader />}
            {activating && <div>anyád</div>}
          </div>
        </div>
      </BasePopup>
    </div>
  );
}
