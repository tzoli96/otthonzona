import React, { useState, useEffect } from "react";
import {
  property_condition,
  builtYear,
  komfort,
  viewOptions,
  orientationOptions,
  ceilingHeightOptions,
  floorOptions,
  houseFloors,
  lift,
  balconyOptions,
  heatingOptions,
  legkondicionalo,
  furdo,
  garden,
  tetoter,
  parktype,
  disabled,
} from "../../res/options";

const tableFields = [
  {
    label: "Ingatlan állapotba",
    value: "property_condition",
    options: property_condition,
  },
  {
    label: "Építés éve",
    value: "builtYear",
    options: builtYear,
  },
  {
    label: "Komfort",
    value: "komfort",
    options: komfort,
  },
  {
    label: "Kilátás",
    value: "view",
    options: viewOptions,
  },
  {
    label: "Tájolás",
    value: "orientation",
    options: orientationOptions,
  },
  {
    label: "Belmagasság",
    value: "ceilingHeight",
    options: ceilingHeightOptions,
  },
  {
    label: "Emelet",
    value: "floor",
    options: floorOptions,
  },
  {
    label: "Épület szintjei",
    value: "houseFloors",
    options: houseFloors,
  },
  {
    label: "Lift",
    value: "lift",
    options: lift,
  },
  {
    label: "Erkély",
    value: "balcony",
    options: balconyOptions,
  },
  {
    label: "Fűtés",
    value: "heating",
    options: heatingOptions,
  },
  {
    label: "Légkondícionáló",
    value: "legkondicionalo",
    options: legkondicionalo,
  },
  {
    label: "Fürdő és wc",
    value: "furdo",
    options: furdo,
  },
  {
    label: "Kertkapcsolatos",
    value: "garden",
    options: garden,
  },
  {
    label: "Tetőtér",
    value: "tetoter",
    options: tetoter,
  },
  {
    label: "Parkolás",
    value: "parktype",
    options: parktype,
  },
  {
    label: "Akadálymentesített",
    value: "disabled",
    options: disabled,
  },
];

function About({ property }) {
  const [activeTab, setActiveTab] = useState("Leírás");

  const getLabel = (value, optionsArray) => {
    const option = optionsArray.find((option) => option.value === value);
    return option ? option.label : value;
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Leírás":
        return (
          <div
            dangerouslySetInnerHTML={{ __html: property?.description || "" }}
          />
        );
      case "Tulajdonágok":
        return (
          <div className="grid grid-cols-2">
            {tableFields
              .map((field) => ({
                attribute: field.label,
                value: getLabel(property[field.value], field.options),
              }))
              .filter((item) => item.value)
              .map((item, index) => (
                <div key={index} className="my-2">
                  <p className="text-sm font-semibold">{item.attribute}</p>
                  <p className="text-lg text-gray-900 font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
          </div>
        );
      default:
        return "Nincs adat...";
    }
  };

  return (
    <div className="light-card-shadow p-6 rounded-2xl bg-white mt-8">
      <p className="card-heading">Az ingatlanról</p>
      <div className="mt-4 flex gap-4">
        {["Leírás", "Tulajdonágok"].map((tabName) => (
          <span
            key={tabName}
            className={`py-2 px-4 rounded-full cursor-pointer font-bold ${
              activeTab === tabName
                ? "orange-gradient text-white"
                : "bg-gray-200 text-grey-600"
            }`}
            onClick={() => setActiveTab(tabName)}
          >
            {tabName}
          </span>
        ))}
      </div>
      <div className="mt-8 mb-16 text-lightgrey text-sm">{renderContent()}</div>
    </div>
  );
}

export default About;
