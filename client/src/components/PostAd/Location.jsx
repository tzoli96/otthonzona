import React, { useState } from "react";
import ExpandableCard from "../Elements/ExpandableCard";
import icon from "../../pictures/app/ad-location.svg";
import AppSelect from "../Elements/AppSelect";
import Input from "../Elements/Input";
import Switch from "../Elements/Switch";
import { districtOptions, settlementOptions } from "../../res/options";
import { FaCheckCircle } from "react-icons/fa";
import { request } from "../../utils/request";

function Location({ prefill }) {
  return (
    <ExpandableCard
      Component={({ isExpanded, setIsExpanded }) => {
        const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
        const [settlement, setSettlement] = useState(undefined);
        const [selectedSettlement, setSelectedSettlement] = useState(
          prefill?.settlement || ""
        );

        return (
          <div className="w-full my-8 p-6">
            <div className="w-full md:grid grid-cols-2">
              <div className="flex gap-4 items-center">
                <img src={icon} className="h-6 w-6" />
                <span className="text-xl font-bold mt-0">Elhelyezkedés</span>
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
            {
              <div
                className="py-6"
                style={{ display: isExpanded ? "block" : "none" }}
              >
                <div className="md:grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-bold">Település</p>
                    <AppSelect
                      options={settlementOptions}
                      name="settlement"
                      prefill={prefill}
                      onChange={(selectedOption) => {
                        setSelectedSettlement(selectedOption.value);
                      }}
                      loadOptions={async (inputValue, callback) => {
                        const response = await request(
                          "/api/property/settlements?q=" + inputValue
                        );
                        callback(response);
                      }}
                      isAsync
                    />
                  </div>
                  {selectedSettlement === "Budapest" && (
                    <div>
                      <p className="font-bold">Kerület</p>
                      <AppSelect
                        options={districtOptions}
                        name="district"
                        prefill={prefill}
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold">Utca</p>
                    <div className="mt-2">
                      <Input variant="white" name="street" prefill={prefill} />
                    </div>
                  </div>
                </div>
                <div className="md:grid grid-cols-3 gap-4 my-4">
                  <div>
                    <p className="font-bold">Házszám</p>
                    <Input
                      variant="white"
                      name="houseNo"
                      prefill={prefill}
                      onWheel={(e) => e.target.blur()}
                    />
                  </div>
                  <div className="flex">
                    <div>
                      <p className="font-bold">Cím pontossága</p>
                      <p className="text-gray-500 text-sm font-medium">
                        Szeretnéd, hogy az ingatlan a találati listában pontos
                        címmel jelenjen meg?
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <Switch
                        name="exactPosition"
                        defaultValue={prefill?.["exactPosition"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 h-1">
                  <span className="float-right">
                    <button
                      type="button"
                      className="blue-button"
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
            }
          </div>
        );
      }}
    />
  );
}

export default Location;
