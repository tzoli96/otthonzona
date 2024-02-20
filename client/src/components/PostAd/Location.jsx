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
            <div className="w-full lg:grid grid-cols-2">
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
                <div className="lg:grid grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div className="my-4 lg:my-2">
                    <p className="font-bold">Település</p>
                    <AppSelect
                      options={settlementOptions}
                      name="settlement"
                      prefill={prefill}
                      onChange={(selectedOption) => {
                        const value = selectedOption
                          ? selectedOption.value
                          : "";
                        setSelectedSettlement(value);
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
                    <div className="my-4 lg:my-2">
                      <p className="font-bold">Kerület</p>
                      <AppSelect
                        options={districtOptions}
                        name="district"
                        prefill={prefill}
                      />
                    </div>
                  )}

                  <div className="my-4 lg:my-2">
                    <p className="font-bold">Utca</p>
                    <Input variant="white" name="street" prefill={prefill} />
                  </div>
                </div>

                <div className="lg:grid grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div className="my-4 lg:my-2">
                    <p className="font-bold">Házszám</p>
                    <Input
                      variant="white"
                      name="houseNo"
                      prefill={prefill}
                      onWheel={(e) => e.target.blur()}
                    />
                  </div>

                  <div className="my-4 lg:my-2">
                    <p className="font-bold">Cím pontossága</p>

                    <div className="grid !grid-cols-10 gap-4 h-[auto] xl:h-[40px]">
                      <p className="text-gray-500 text-sm font-medium col-span-8 items-center flex !flex-row">
                        Szeretnéd, hogy az ingatlan a találati listában pontos
                        címmel jelenjen meg?
                      </p>

                      <div className="flex !flex-row justify-end items-center col-span-2">
                        <Switch
                          name="exactPosition"
                          defaultValue={prefill?.["exactPosition"]}
                        />
                      </div>
                    </div>
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
            }
          </div>
        );
      }}
    />
  );
}

export default Location;
