import React, { useState } from "react";
import agentImage from "../../pictures/person.png";
import stars from "../../icons/stars.svg";
import whiteLogo from "../../icons/white-logo.svg";
import envl from "../../icons/env.svg";
import phone from "../../icons/phone.svg";
import roarbanner from "../../pictures/roar_banner.png";
import { profilePhotoPlaceholder } from "../Profile";
import thousandSeparator, {
  formatPhoneNumber,
} from "../../utils/thousandSeparator";
import formatHiddenPhoneNumber from "../../utils/formatHiddenPhoneNumber";

function Agent({ agent }) {
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    setShowPhone(formatPhoneNumber(agent?.phone));
  };

  return (
    <div>
      <div className="rounded-2xl bg-white pt-8 card-shadow bg-blue overflow-hidden">
        <div className="justify-center flex-col flex items-center text-white">
          <div className="w-36 h-36 rounded-full overflow-hidden rounded-image-container">
            <img
              src={agent?.photo || profilePhotoPlaceholder}
              className="min-h-full min-w-full"
            />
          </div>
          <p className="text-white font-bold text-2xl mt-4">
            {agent.firstName} {agent.lastName}
          </p>
          {/*<p className="text-white text-sm font-bold">Ingatlanközvetítő</p>*/}
          {/*<div className="mt-4">
          <img src={stars} />
        </div>*/}
          <p className="mt-4 text-xs text-center">
            Érdekel az ingatlan?
            <br /> Lépj kapcsolatba az ingatlanközvetítővel
          </p>
        </div>
        <div className="orange-gradient p-8 rounded-t-[60px] mt-6 justify-center flex-col flex items-center text-white">
          <img src={whiteLogo} className="w-2/5" />

          <a href={`mailto:${agent?.email}`} className="block w-full">
            <button
              className="relative blue-button w-full mt-8 flex gap-12 items-center text-blue"
              style={{ width: "100%", background: "white" }}
            >
              <img src={envl} className="env-fix" />
              <span className="text-blue">Üzenetet küldök</span>
            </button>
          </a>

          <div className="flex w-full justify-between items-center">
            <button
              className={`relative blue-button flex-1 mt-3 gap-12 items-center ${
                !showPhone ? "max-sm:!hidden lg:max-2xl:!hidden" : ""
              }`}
              style={{ maxWidth: "100%" }}
            >
              <img src={phone} className="env-fix" />

              <span>
                {showPhone
                  ? formatPhoneNumber(agent?.phone)
                  : formatHiddenPhoneNumber(agent?.phone)}
              </span>
            </button>

            {!showPhone && (
              <button
                className="relative blue-button ml-4 max-sm:ml-0 lg:max-2xl:ml-0 p-2 mt-3 max-sm:!w-full lg:max-2xl:!w-full gap-12"
                onClick={handleShowPhone}
              >
                <img
                  src={phone}
                  className="sm:max-lg:hidden 2xl:hidden env-fix"
                />

                <span>Mutatás</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <a
        href="https://www.generali.hu/partner/davidmeggyes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="mt-6 rounded-2xl center-image w-full"
          src={roarbanner}
        />
      </a>
    </div>
  );
}

export default Agent;
