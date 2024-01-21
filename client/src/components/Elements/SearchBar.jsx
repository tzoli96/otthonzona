import React, { useEffect, useState } from "react";
import ExtendedSearch from "./ExtendedSearch";
import AppSelect from "./AppSelect";
import {
  districtOptions,
  propertyType,
  settlementOptions,
} from "../../res/options";
import Input from "./Input";
import { useSearchParams } from "react-router-dom";
import { request } from "../../utils/request";

function SearchBar({ onChangeFilters, onSubmit }) {
  const [showExtended, setShowExtended] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});
  const [ready, setReady] = useState(false);
  const [forSale, setForSale] = useState(true);
  const selectedSettlement = searchParams.get("settlement");

  const multiplier = forSale ? 1000000 : 1000;
  const [displayMinPrice, setDisplayMinPrice] = useState("");
  const [displayMaxPrice, setDisplayMaxPrice] = useState("");
  const handleMinPriceChange = (e) => {
    const displayValue = e.target.value;
    setDisplayMinPrice(displayValue);
    onChange("minPrice", displayValue * multiplier);
  };
  const priceAddon = forSale ? "M Ft" : "E Ft";

  const handleMaxPriceChange = (e) => {
    const displayValue = e.target.value;
    setDisplayMaxPrice(displayValue);
    onChange("maxPrice", displayValue * multiplier);
  };

  const onChange = (name, value) => {
    if (ready) {
      setSearchParams({ ...filters, [name]: value });
      setFilters({ ...filters, [name]: value });
    }
  };

  useEffect(() => {
    const filters = {};
    for (const entry of searchParams.entries()) {
      filters[entry[0]] = decodeURIComponent(entry[1]);
      if (entry[0] === "adType") {
        setForSale(filters[entry[0]] === "elado");
      }
    }
    setFilters({ ...filters });
    setReady(true);
  }, [searchParams]);

  useEffect(() => {
    onChangeFilters(filters);
  }, [filters]);

  if (!ready) {
    return false;
  }

  return (
    <div>
      <div className="flex gap-2">
        <button
          className={
            "px-6 py-1 rounded-lg " +
            (forSale ? "orange-gradient text-white" : "bg-white")
          }
          onClick={() => {
            setForSale(true);
            onChange("adType", "elado");
          }}
        >
          Eladó
        </button>
        <button
          className={
            "px-6 py-1 rounded-lg " +
            (forSale ? "bg-white" : "orange-gradient text-white")
          }
          onClick={() => {
            setForSale(false);
            onChange("adType", "kiado");
          }}
        >
          Kiadó
        </button>
      </div>
      <div className="bg-white rounded-2xl lg:grid grid-cols-5 gap-4 p-4 relative z-33 mt-4 card-shadow ">
        <div className="flex flex-col lg:gap-2 max-lg:my-4">
          <h3 className="font-bold">Típus</h3>
          <div className="rounded-2xl w-full">
            <AppSelect
              options={propertyType}
              placeholder="Típus"
              onChange={(option) => {
                if (option) {
                  onChange("propertyType", option.value);
                } else {
                  onChange("propertyType", null);
                }
              }}
              name="propertyType"
              prefill={filters}
            />
          </div>
        </div>
        <div className="flex flex-col lg:gap-2 max-lg:my-4">
          <h3 className="font-bold">Hol keresel?</h3>
          <AppSelect
            options={settlementOptions}
            placeholder={"Hol keresel"}
            onChange={(option) => {
              if (option) {
                onChange("settlement", option.value);
              } else {
                onChange("settlement", null);
              }
            }}
            loadOptions={async (inputValue, callback) => {
              const response = await request(
                "/api/property/settlements?q=" + inputValue
              );
              callback(response);
            }}
            isAsync
            name="settlement"
            prefill={filters}
          />
          {selectedSettlement === "Budapest" && (
            <AppSelect
              options={districtOptions}
              placeholder="Kerület"
              onChange={(option) => {
                if (option) {
                  onChange("district", option.value);
                } else {
                  onChange("district", null);
                }
              }}
              name="district"
              prefill={filters}
            />
          )}
        </div>
        <div className="flex flex-col lg:gap-2 max-lg:my-4">
          <h3 className="font-bold">Alapterület</h3>
          <div className="grid grid-cols-2 gap-2">
            <Input
              variant={"white"}
              addon={
                <span>
                  m<sup>2</sup>
                </span>
              }
              placeholder={"Min"}
              addonClass={"!-ml-9 !mt-3 !p-0 !h-4 !w-6"}
              type="number"
              onChange={(e) => {
                onChange("minArea", e.target.value);
              }}
              value={filters.minArea}
              onWheel={(e) => e.target.blur()}
            />
            <Input
              variant={"white"}
              addon={
                <span>
                  m<sup>2</sup>
                </span>
              }
              placeholder={"Max"}
              addonClass={"!-ml-9 !mt-3 !p-0 !h-4 !w-6"}
              type="number"
              onChange={(e) => {
                onChange("maxArea", e.target.value);
              }}
              value={filters.maxArea}
              onWheel={(e) => e.target.blur()}
            />
          </div>
        </div>
        <div className="flex flex-col lg:gap-2 max-lg:my-4">
          <h3 className="font-bold">Ár ({forSale ? "millió" : "ezer"})</h3>
          <div className="grid grid-cols-2 gap-2">
            <Input
              variant={"white"}
              addon={
                <span style={{ display: "flex", alignItems: "center" }}>
                  {forSale ? "M" : "E"}{" "}
                  <span style={{ marginLeft: "2px" }}>Ft</span>
                </span>
              }
              placeholder={"Min"}
              addonClass={"!-ml-9 !mt-3 !p-0 !h-4 !w-6"}
              type="number"
              onChange={handleMinPriceChange}
              value={displayMinPrice}
              onWheel={(e) => e.target.blur()}
            />
            <Input
              variant={"white"}
              addon={
                <span style={{ display: "flex", alignItems: "center" }}>
                  {forSale ? "M" : "E"}{" "}
                  <span style={{ marginLeft: "2px" }}>Ft</span>
                </span>
              }
              placeholder={"Max"}
              addonClass={"!-ml-9 !mt-3 !p-0 !h-4 !w-6"}
              type="number"
              onChange={handleMaxPriceChange}
              value={displayMaxPrice}
              onWheel={(e) => e.target.blur()}
            />
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-3">
          <button className="orange-button" onClick={onSubmit}>
            Keresés
          </button>
          <p
            className="text-[#EC6608] text-sm ml-1.5 cursor-pointer"
            onClick={() => setShowExtended(!showExtended)}
          >
            Részletes keresés
          </p>
        </div>
        {showExtended && (
          <ExtendedSearch
            onChange={onChange}
            filters={filters}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
