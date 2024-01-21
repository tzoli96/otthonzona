/* eslint-disable react-hooks/rules-of-hooks */

import React, { useMemo, useState } from "react";
import ExpandableCard from "../Elements/ExpandableCard";
import icon from "../../pictures/app/ad-basic.svg";
import AppSelect from "../Elements/AppSelect";
import Input from "../Elements/Input";
import { adType, btype, propertyType } from "../../res/options";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaCheckCircle } from "react-icons/fa";

function BasicDetails({ prefill }) {
  return (
    <ExpandableCard
      Component={({ isExpanded, setIsExpanded }) => {
        const [selectedPropertyType, setSelectedPropertyType] = useState(
          prefill?.propertyType || ""
        );

        const [description, setDescription] = useState(
          prefill?.description || ""
        );
        const [hasBeenExpanded, setHasBeenExpanded] = useState(false);

        const bTypeOptions = useMemo(() => {
          return btype.filter((b) => b.type === selectedPropertyType);
        }, [btype, selectedPropertyType]);

        return (
          <div className="w-full my-8 p-6" key="1">
            <div className="w-full lg:grid grid-cols-2">
              <div className="flex gap-4 items-center">
                <img src={icon} className="h-6 w-6" />
                <span className="text-xl font-bold mt-0">
                  Az ingatlan adatai
                </span>
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
                <div className="lg:flex">
                  <div className="my-4 lg:my-2 w-full mr-2">
                    <p className="font-bold">Szobák</p>
                    <Input
                        name="rooms"
                        variant="white"
                        type="number"
                        prefill={prefill}
                        onWheel={(e) => e.target.blur()}
                    />
                  </div>

                  <div className="my-4 lg:my-2 w-full">
                    <p className="font-bold">Félszobák</p>
                    <Input
                        name="halfRooms"
                        variant="white"
                        type="number"
                        prefill={prefill}
                        onWheel={(e) => e.target.blur()}
                    />
                  </div>
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Alapterület</p>
                  <Input
                      name="area"
                      variant="white"
                      type="number"
                      addon={
                        <>
                          m<sup>2</sup>
                        </>
                      }
                      prefill={prefill}
                      onWheel={(e) => e.target.blur()}
                  />
                </div>

                {selectedPropertyType === "haz" && (
                    <div className="my-4 lg:my-2">
                      <p className="font-bold">Telekterület</p>
                      <Input
                          name="landArea"
                          variant="white"
                          type="number"
                          addon={
                            <>
                              m<sup>2</sup>
                            </>
                          }
                          prefill={prefill}
                          onWheel={(e) => e.target.blur()}
                      />
                    </div>
                )}

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Ár</p>
                  <Input
                      name="price"
                      variant="white"
                      addon={"Ft"}
                      type="number"
                      prefill={prefill}
                      onWheel={(e) => e.target.blur()}
                  />
                </div>
              </div>

              <div className="lg:grid grid-cols-3 gap-4">
                <div className="my-4 lg:my-2">
                  <p className="font-bold">Hirdetés Típusa</p>
                  <AppSelect options={adType} name="adType" prefill={prefill}/>
                </div>

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Ingatlan Típusa</p>
                  <AppSelect
                      options={propertyType}
                      name="propertyType"
                      prefill={prefill}
                      onChange={(selectedOption) => {
                        setSelectedPropertyType(selectedOption.value);
                      }}
                  />
                </div>

                <div className="my-4 lg:my-2" key={selectedPropertyType}>
                  <p className="font-bold">Ingatlan altípusa</p>
                  <AppSelect
                      options={bTypeOptions}
                      name="btype"
                      prefill={prefill}
                  />
                </div>
              </div>

              <div className="my-4 lg:my-2">
                <p className="font-bold">Leírás</p>
                <input type="hidden" name="description" value={description}/>
                <div className="mb-20 md:mb-16">
                  <ReactQuill
                      theme="snow"
                      value={description}
                      onChange={setDescription}
                      style={{
                        height: 200,
                      }}
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

export default BasicDetails;
