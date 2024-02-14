import {useState} from "react";
import roomIcon from "../../icons/room.svg";
import pinIcon from "../../icons/pin.svg";
import envWhiteIcon from "../../icons/env-white.svg";
import phone from "../../icons/phone.svg";
import {formatPhoneNumber} from "../../utils/thousandSeparator";
import formatHiddenPhoneNumber from "../../utils/formatHiddenPhoneNumber";

function Agency({agency}) {
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    setShowPhone(formatPhoneNumber(agency.officePhone));
  };

  return (
      <div className="rounded-2xl bg-white py-8 px-6 card-shadow">
        <p className="card-heading">{agency.officeName}</p>

        <div className="mt-6">
          {agency.officeCompany && (
              <div className="flex flex-col md:max-lg:flex-row 2xl:flex-row border-b mb-3 pb-1 gap-3">
                <div className="flex gap-3">
                  <img width="20" src={roomIcon}/>

                  <span className="text-lightgrey text-md font-bold">Cég</span>
                </div>

                <div className="font-bold ml-0 md:max-lg:ml-auto 2xl:ml-auto">
                  {agency.officeCompany}
                </div>
              </div>
          )}

          {agency.network && (
              <div className="flex flex-col md:max-lg:flex-row 2xl:flex-row border-b mb-3 pb-1 gap-3">
                <div className="flex gap-3">
                  <img width="20" src={roomIcon}/>

                  <span className="text-lightgrey text-md font-bold">Hálózat</span>
                </div>

                <div className="font-bold ml-0 md:max-lg:ml-auto 2xl:ml-auto">
                  {agency.network}
                </div>
              </div>
          )}

          {agency.officeAddress && (
              <div className="flex flex-col md:max-lg:flex-row 2xl:flex-row border-b mb-3 pb-1 gap-3">
                <div className="flex gap-3">
                  <img width="20" src={pinIcon}/>

                  <span className="text-lightgrey text-md font-bold">Iroda</span>
                </div>

                <div className="font-bold ml-0 md:max-lg:ml-auto 2xl:ml-auto">
                  {agency.officeAddress}
                </div>
              </div>
          )}
        </div>

        {(agency.officePhone || agency.officeEmail) && (
            <>
              {agency.officeEmail && (
                  <a href={`mailto:${agency.officeEmail}`} className="block w-full">
                    <button
                        className="relative !w-full mt-8 flex gap-12 justify-center items-center orange-button"
                    >
                      <img src={envWhiteIcon} className="env-fix"/>
                      <span className="text-white">Üzenetet küldök</span>
                    </button>
                  </a>
              )}

              {agency.officePhone && (
                  <div className="flex w-full justify-between items-center">
                    <button
                        className={`relative blue-button flex-1 mt-3 gap-12 items-center ${!showPhone ? 'max-sm:!hidden lg:max-2xl:!hidden' : ''}`}
                        style={{maxWidth: "100%"}}
                    >
                      <img src={phone} className="env-fix"/>

                      <span>
                {showPhone
                    ? formatPhoneNumber(agency.officePhone)
                    : formatHiddenPhoneNumber(agency.officePhone)
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
              )}
            </>
        )}
      </div>
  );
}

export default Agency;
