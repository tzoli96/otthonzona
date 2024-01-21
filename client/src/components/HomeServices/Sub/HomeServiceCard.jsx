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
  const services = [
    {
      id: "removal",
      icon: serviceRemovalIcon,
      title: "Költöztetés",
      description: "Vedd igénybe költöztetés szolgáltatásunk, hogy biztonságban, kényelmesen költözhess!"
    },
    {
      id: "realstate",
      icon: serviceRealstateIcon,
      title: "Ingatlanközvetítők",
      description: "Közvetítők segítségével gyorsabban megtalálhatod álmaid otthonát."
    },
    {
      id: "matterport",
      icon: service3dIcon,
      title: "Matterport",
      description: "Fedezze fel az ingatlanok új dimenzióját, 3D-s virtuális túrákkal és pontos alaprajzokkal."
    },
    {
      id: "lawyer",
      icon: serviceLawyerIcon,
      title: "Ügyvédek",
      description: "Ügyvédeink ingatlan adásvételre specializálódtak, így minden kérdésben segítségedre lesznek."
    },
    {
      id: "energy",
      icon: serviceEnergyIcon,
      title: "Energetika",
      description: "Cégünk vállalja energetikai tanúsítványok elkészítését."
    },
    {
      id: "cleaning",
      icon: serviceCleaningIcon,
      title: "Takarítás",
      description: "Adja át tisztán, eladásra vagy kiadásra szánt tulajdonát."
    }
  ];

  return (
    <>
      <div className="relative pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-50 gap-6 w-10/12 mx-auto">
          {services.map(service => (
              <a href="/services" key={service.id}>
                <div className="bg-white max-w-full py-4 px-7 lg:py-7 lg:px-10 rounded-xl lg:rounded-2xl gap-2 shadow-lg flex flex-col h-full">
                  <img src={service.icon} alt="" className="w-[60px] h-[60px] max-w-full object-contain" />

                  <h1 className="text-[#006FB9] text-2xl lg:max-xl:text-xl font-extrabold">
                    {service.title}
                  </h1>

                  <p className="text-[#949494] font-semibold">
                    {service.description}
                  </p>
                </div>
              </a>
          ))}
        </div>

        <div className="absolute top-10 z-[-1] hidden lg:block ">
          <img src={serviceBg} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default HomeServiceCard;
