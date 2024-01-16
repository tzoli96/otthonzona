import React from "react";
import AppSelect from "./AppSelect";
import {
  balconyOptions,
  builtYear,
  ceilingHeightOptions,
  floorOptions,
  heatingOptions,
  komfort,
  legkondicionalo,
  orientationOptions,
  property_condition,
  viewOptions,
  houseFloors,
  lift,
  disabled,
  furdo,
  garden,
  parktype,
  tetoter,
} from "../../res/options";
import useIsMobile from "../../utils/useIsMobile";

function ExtendedSearch({ onChange, filters, onSubmit }) {
  const isMobile = useIsMobile();

  return (
    <div className="md:grid grid-cols-3 gap-8 p-4 bg-white w-full col-span-5">
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">
          Ingatlan állapota:
        </p>
        <AppSelect
          placeholder={"Mindegy"}
          options={property_condition}
          onChange={({ value }) => {
            onChange("property_condition", value);
          }}
          name="property_condition"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Építés éve</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={builtYear}
          onChange={({ value }) => {
            onChange("builtYear", value);
          }}
          name="builtYear"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Komfort</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={komfort}
          onChange={({ value }) => {
            onChange("komfort", value);
          }}
          name="komfort"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Kilátás</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={viewOptions}
          onChange={({ value }) => {
            onChange("view", value);
          }}
          name="view"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Tájolás</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={orientationOptions}
          onChange={({ value }) => {
            onChange("orientation", value);
          }}
          name="orientation"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Belmagasság</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={ceilingHeightOptions}
          onChange={({ value }) => {
            onChange("ceilingHeight", value);
          }}
          name="ceilingHeight"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Emelet</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={floorOptions}
          onChange={({ value }) => {
            onChange("floor", value);
          }}
          name="floor"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Épület szintjei</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={houseFloors}
          onChange={({ value }) => {
            onChange("houseFloors", value);
          }}
          name="houseFloors"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Lift</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={lift}
          onChange={({ value }) => {
            onChange("lift", value);
          }}
          name="lift"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Erkély</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={balconyOptions}
          onChange={({ value }) => {
            onChange("balcony", value);
          }}
          name="balcony"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Fűtés</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={heatingOptions}
          onChange={({ value }) => {
            onChange("heating", value);
          }}
          name="heating"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Légkondícionáló</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={legkondicionalo}
          onChange={({ value }) => {
            onChange("legkondicionalo", value);
          }}
          name="legkondicionalo"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Fürdő és wc</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={furdo}
          onChange={({ value }) => {
            onChange("furdo", value);
          }}
          name="furdo"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Kertkapcsolatos</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={garden}
          onChange={({ value }) => {
            onChange("garden", value);
          }}
          name="garden"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Tetőtér</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={tetoter}
          onChange={({ value }) => {
            onChange("tetoter", value);
          }}
          name="tetoter"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">Parkolás</p>
        <AppSelect
          placeholder={"Mindegy"}
          options={parktype}
          onChange={({ value }) => {
            onChange("parktype", value);
          }}
          name="parktype"
          prefill={filters}
        />
      </div>
      <div className="w-full mt-2">
        <p className="text-lg text-gray-900 font-bold my-1">
          Akadálymentesített
        </p>
        <AppSelect
          placeholder={"Mindegy"}
          options={disabled}
          onChange={({ value }) => {
            onChange("disabled", value);
          }}
          name="disabled"
          prefill={filters}
        />
      </div>

      <div className="col-span-3 h-24 md:h-auto mt-2">
        <span className="md:float-right md:mx-2 mt-2">
          <button className="blue-button" onClick={onSubmit}>
            Keresés
          </button>
        </span>
        {isMobile && <div className="h-2" />}
        <span className="md:float-right mt-2">
          <button
            className="blue-button border-2"
            style={{ background: "white", color: "#333" }}
          >
            Bezárás{" "}
          </button>
        </span>
      </div>
    </div>
  );
}

export default ExtendedSearch;
