import React from "react";
import serviceBg from "../../../pictures/services/services-bg-img.svg";
import serviceRemovalIcon from "../../../pictures/services/services-removal-icon.svg";
import serviceRealstateIcon from "../../../pictures/services/services-realstate-icon.svg";
import serviceInsuranceIcon from "../../../pictures/services/services-insurance-icon.svg";
import serviceLawyerIcon from "../../../pictures/services/services-lawyer-icon.svg";
import serviceEnergyIcon from "../../../pictures/services/services-energy-icon.svg";
import serviceCleaningIcon from "../../../pictures/services/services-cleaning-icon.svg";
import service3dIcon from "../../../pictures/services/services-3d-icon.svg";

const HomeServiceCard = () => {
  return (
    <>
      <div className="relative lg:h-[480px] pb-20">
        <div className="lg:-mt-10 lg:absolute flex flex-col items-center mt-8 lg:left-36 left-5 lg:grid lg:grid-cols-3 z-50 gap-6 col-end lg:w-10/12 lg:mx-auto">
          <a href="/services">
            <div className="bg-white w-max p-3 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl flex flex-col gap-2 shadow-lg service-card">
              <img src={serviceRemovalIcon} alt="" className="w-max" />
              <h1 className="text-[#006FB9] text-2xl font-extrabold">
                Költöztetés
              </h1>
              <p className="text-[#949494] font-semibold">
                Vedd igénybe költöztetés szolgáltatásunk, <br /> hogy
                biztonságban, kényelmesen költözhess!
              </p>
            </div>
          </a>
          <a href="/services">
            <div className="bg-white w-max p-3 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl flex flex-col gap-2 shadow-lg service-card">
              <img src={serviceRealstateIcon} alt="" className="w-max" />
              <h1 className="text-[#006FB9] text-2xl font-extrabold">
                Ingatlanközvetítők
              </h1>
              <p className="text-[#949494] font-semibold">
                Közvetítők segítségével gyorsabban <br /> megtalálhatod álmaid
                otthonát.
              </p>
            </div>
          </a>
          <a href="/services">
            <div className="bg-white w-max p-3 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl flex flex-col gap-2 shadow-lg service-card">
              <img src={service3dIcon} alt="" className="w-[20%]" />
              <h1 className="text-[#006FB9] text-2xl font-extrabold">
                Matterport
              </h1>
              <p className="text-[#949494] font-semibold">
                Fedezze fel az ingatlanok új dimenzióját,
                <br /> 3D-s virtuális túrákkal és pontos alaprajzokkal
              </p>
            </div>
          </a>
          <a href="/services">
            <div className="bg-white w-max p-3 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl flex flex-col gap-2 shadow-lg service-card">
              <img src={serviceLawyerIcon} alt="" className="w-max" />
              <h1 className="text-[#006FB9] text-2xl font-extrabold">
                Ügyvédek
              </h1>
              <p className="text-[#949494] font-semibold">
                Ügyvédeink ingatlan adásvételre specializálódtak, <br /> így
                minden kérdésben segítségedre lesznek.
              </p>
            </div>
          </a>
          <a href="/services">
            <div className="bg-white w-max p-3 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl flex flex-col gap-2 shadow-lg service-card">
              <img src={serviceEnergyIcon} alt="" className="w-max" />
              <h1 className="text-[#006FB9] text-2xl font-extrabold">
                Energetika
              </h1>
              <p className="text-[#949494] font-semibold">
                Cégünk vállalja energetikai <br /> tanúsítványok elkészítését.
              </p>
            </div>
          </a>
          <a href="/services">
            <div className="bg-white w-max p-3 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl flex flex-col gap-2 shadow-lg service-card">
              <img src={serviceCleaningIcon} alt="" className="w-max" />
              <h1 className="text-[#006FB9] text-2xl font-extrabold">
                Takarítás
              </h1>
              <p className="text-[#949494] font-semibold">
                Adja át tisztán, eladásra <br /> vagy kiadásra szánt tulajdonát.
              </p>
            </div>
          </a>
        </div>
        <div className="absolute top-10 z-0 hidden lg:block ">
          <img src={serviceBg} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default HomeServiceCard;
