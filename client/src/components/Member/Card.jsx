import React, {useState} from "react";
import whiteLogo from "../../icons/white-logo.svg";
import envl from "../../icons/env.svg";
import phone from "../../icons/phone.svg";
import {profilePhotoPlaceholder} from "../Profile";
import {formatPhoneNumber,} from "../../utils/thousandSeparator";
import formatHiddenPhoneNumber from "../../utils/formatHiddenPhoneNumber";

function MemberCard({member}) {
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    setShowPhone(formatPhoneNumber(member?.user?.phone));
  };

  return (
      <div>
        <div className="rounded-2xl bg-white pt-8 card-shadow bg-blue overflow-hidden">
          <div className="justify-center flex-col flex items-center text-white">
            <div className="w-36 h-36 rounded-full overflow-hidden rounded-image-container">
              <img
                  src={member?.user?.photo || profilePhotoPlaceholder}
                  className="min-h-full min-w-full"
              />
            </div>

            <p className="text-white font-bold text-2xl mt-4">
              {member?.user?.firstName} {member?.user?.lastName}
            </p>

            <p className="mt-4 text-xs text-center">
              Lépj kapcsolatba az ingatlanközvetítővel
            </p>
          </div>
          <div
              className="orange-gradient p-8 rounded-t-[60px] mt-6 justify-center flex-col flex items-center text-white">
            <img src={whiteLogo} className="w-2/5"/>

            <a href={`mailto:${member?.user?.email}`} className="block w-full">
              <button
                  className="relative blue-button w-full mt-8 flex gap-12 items-center text-blue"
                  style={{width: "100%", background: "white"}}
              >
                <img src={envl} className="env-fix"/>
                <span className="text-blue">Üzenetet küldök</span>
              </button>
            </a>

            <div className="flex w-full justify-between items-center">
              <button
                  className={`relative blue-button flex-1 mt-3 gap-12 items-center ${!showPhone ? 'max-sm:!hidden lg:max-2xl:!hidden' : ''}`}
                  style={{maxWidth: "100%"}}
              >
                <img src={phone} className="env-fix"/>

                <span>
                {showPhone
                    ? formatPhoneNumber(member?.user?.phone)
                    : formatHiddenPhoneNumber(member?.user?.phone)
                }
              </span>
              </button>

              {!showPhone && (
                  <button
                      className="relative blue-button ml-4 max-sm:ml-0 lg:max-2xl:ml-0 p-2 mt-3 max-sm:!w-full lg:max-2xl:!w-full gap-12"
                      onClick={handleShowPhone}
                  >
                    <img src={phone} className="sm:max-lg:hidden 2xl:hidden env-fix"/>

                    <span>Mutatás</span>
                  </button>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default MemberCard;
