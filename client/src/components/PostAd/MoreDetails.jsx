import React, { useState } from "react";
import ExpandableCard from "../Elements/ExpandableCard";
import icon from "../../pictures/app/ad-details.svg";
import AppSelect from "../Elements/AppSelect";
import { FaCheckCircle } from "react-icons/fa";
import Input from "../Elements/Input";
import Switch from "../Elements/Switch";
import Select from "../Elements/Select";
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

function MoreDetails({ prefill }) {
  return (
    <ExpandableCard
      Component={({ isExpanded, setIsExpanded }) => {
        const [hasBeenExpanded, setHasBeenExpanded] = useState(false);

        return (
          <div className="w-full my-8 p-6">
            <div className="w-full lg:grid grid-cols-2">
              <div className="flex gap-4 items-center">
                <img src={icon} className="h-6 w-6" />
                <span className="text-xl font-bold mt-0">Egyéb adatok</span>
              </div>
              <div>
                {!isExpanded && (
                  <div className="flex items-center justify-end mt-3">
                    {hasBeenExpanded && (
                      <FaCheckCircle
                        color="#5ac71f"
                        className="mr-4"
                        size="2em"
                      />
                    )}{" "}
                    <button
                      type="button"
                      className="orange-button"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {hasBeenExpanded ? "Módosítás" : "Beállítás"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              className="py-6"
              style={{ display: isExpanded ? "block" : "none" }}
            >
              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Ingatlan állapota:</p>
                  <AppSelect
                    options={property_condition}
                    name="property_condition"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Építés éve</p>
                  <AppSelect
                    options={builtYear}
                    name="builtYear"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Komfort</p>
                  <AppSelect
                    options={komfort}
                    name="komfort"
                    prefill={prefill}
                  />
                </div>
              </div>

              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Kilátás</p>
                  <AppSelect
                    options={viewOptions}
                    name="view"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Tájolás</p>
                  <AppSelect
                    options={orientationOptions}
                    name="orientation"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Belmagasság</p>
                  <AppSelect
                    options={ceilingHeightOptions}
                    name="ceilingHeight"
                    prefill={prefill}
                  />
                </div>
              </div>

              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Emelet</p>
                  <AppSelect
                    options={floorOptions}
                    name="floor"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Épület szintjei</p>
                  <AppSelect
                    options={houseFloors}
                    name="houseFloors"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Lift</p>
                  <AppSelect options={lift} name="lift" prefill={prefill} />
                </div>
              </div>

              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Erkély</p>
                  <AppSelect
                    options={balconyOptions}
                    name="balcony"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Fűtés</p>
                  <AppSelect
                    options={heatingOptions}
                    name="heating"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Légkondícionáló</p>
                  <AppSelect
                    options={legkondicionalo}
                    name="legkondicionalo"
                    prefill={prefill}
                  />
                </div>
              </div>

              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Fürdő és wc</p>
                  <AppSelect options={furdo} name="furdo" prefill={prefill} />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Kertkapcsolatos</p>
                  <AppSelect options={garden} name="garden" prefill={prefill} />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Tetőtér</p>
                  <AppSelect
                    options={tetoter}
                    name="tetoter"
                    prefill={prefill}
                  />
                </div>
              </div>

              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Parkolás</p>
                  <AppSelect
                    options={parktype}
                    name="parktype"
                    prefill={prefill}
                  />
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Akadálymentesített</p>
                  <AppSelect
                    options={disabled}
                    name="disabled"
                    prefill={prefill}
                  />
                </div>
              </div>
              <div className="my-12 h-1">
                <span className="float-right">
                  <button
                    type="button"
                    className="blue-button !w-[150px]"
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                      setHasBeenExpanded(true);
                    }}
                  >
                    Mentés
                  </button>
                </span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default MoreDetails;
